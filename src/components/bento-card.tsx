import { cn } from "@/lib/utils";

type BentoCardProps = React.ComponentProps<"div"> & {
  glow?: boolean;
};

export function BentoCard({ children, className, glow, ...props }: BentoCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6",
        glow && "ring-1 ring-accent/20",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
