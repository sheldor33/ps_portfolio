import { useEffect, useRef } from "react";

/**
 * Smooth horizontal wheel scroll inside a zone.
 * Vertical wheel / trackpad deltas map to horizontal movement while pointer is in zone.
 * At scroll ends, events pass through for normal page scroll.
 */
export function useHorizontalWheel(
  zoneRef: React.RefObject<HTMLElement | null>,
  scrollerRef: React.RefObject<HTMLElement | null>,
  onScroll?: () => void,
) {
  const pointerInside = useRef(false);
  const targetScroll = useRef(0);
  const pendingDelta = useRef(0);
  const flushRafId = useRef<number | null>(null);
  const animateRafId = useRef<number | null>(null);
  const onScrollRef = useRef(onScroll);
  onScrollRef.current = onScroll;

  useEffect(() => {
    const zone = zoneRef.current;
    const scroller = scrollerRef.current;
    if (!zone || !scroller) return;

    targetScroll.current = scroller.scrollLeft;

    const isPointerInZone = (x: number, y: number) => {
      const rect = zone.getBoundingClientRect();
      return (
        x >= rect.left &&
        x <= rect.right &&
        y >= rect.top &&
        y <= rect.bottom
      );
    };

    const syncTarget = () => {
      targetScroll.current = scroller.scrollLeft;
      onScrollRef.current?.();
    };

    const animate = () => {
      const maxScroll = Math.max(0, scroller.scrollWidth - scroller.clientWidth);
      const current = scroller.scrollLeft;
      const target = Math.max(0, Math.min(maxScroll, targetScroll.current));
      const diff = target - current;

      if (Math.abs(diff) > 0.25) {
        scroller.scrollLeft = current + diff * 0.32;
        animateRafId.current = requestAnimationFrame(animate);
      } else {
        scroller.scrollLeft = target;
        animateRafId.current = null;
        onScrollRef.current?.();
      }
    };

    const scheduleAnimate = () => {
      if (animateRafId.current === null) {
        animateRafId.current = requestAnimationFrame(animate);
      }
    };

    const flushPendingDelta = () => {
      flushRafId.current = null;
      if (pendingDelta.current === 0) return;

      const maxScroll = Math.max(0, scroller.scrollWidth - scroller.clientWidth);
      const delta = pendingDelta.current;
      pendingDelta.current = 0;

      targetScroll.current = Math.max(
        0,
        Math.min(maxScroll, targetScroll.current + delta),
      );
      scheduleAnimate();
    };

    const queueDelta = (delta: number) => {
      pendingDelta.current += delta;
      if (flushRafId.current === null) {
        flushRafId.current = requestAnimationFrame(flushPendingDelta);
      }
    };

    const onEnter = () => {
      pointerInside.current = true;
      targetScroll.current = scroller.scrollLeft;
      scroller.classList.add("is-wheel-scrolling");
    };

    const onLeave = () => {
      pointerInside.current = false;
      scroller.classList.remove("is-wheel-scrolling");
    };

    zone.addEventListener("pointerenter", onEnter);
    zone.addEventListener("pointerleave", onLeave);
    scroller.addEventListener("scroll", syncTarget, { passive: true });

    const handleWheel = (e: WheelEvent) => {
      const inZone =
        pointerInside.current ||
        isPointerInZone(e.clientX, e.clientY);

      if (!inZone) return;

      const maxScroll = scroller.scrollWidth - scroller.clientWidth;
      if (maxScroll <= 0) return;

      const raw =
        Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      if (raw === 0) return;

      const current = scroller.scrollLeft;
      const delta = raw * 1.15;
      const projected = targetScroll.current + pendingDelta.current + delta;
      const clamped = Math.max(0, Math.min(maxScroll, projected));

      const atStart = current <= 0 && clamped <= 0;
      const atEnd = current >= maxScroll - 1 && clamped >= maxScroll - 1;
      const scrollingForward = delta > 0;

      const canConsume =
        (scrollingForward && !atEnd) ||
        (!scrollingForward && !atStart);

      if (!canConsume) return;

      e.preventDefault();
      e.stopPropagation();

      scroller.classList.add("is-wheel-scrolling");
      queueDelta(delta);
    };

    zone.addEventListener("wheel", handleWheel, { passive: false, capture: true });

    return () => {
      zone.removeEventListener("pointerenter", onEnter);
      zone.removeEventListener("pointerleave", onLeave);
      scroller.removeEventListener("scroll", syncTarget);
      zone.removeEventListener("wheel", handleWheel, { capture: true });
      scroller.classList.remove("is-wheel-scrolling");
      if (flushRafId.current !== null) cancelAnimationFrame(flushRafId.current);
      if (animateRafId.current !== null) cancelAnimationFrame(animateRafId.current);
    };
  }, [zoneRef, scrollerRef]);
}
