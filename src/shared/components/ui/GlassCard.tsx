import { cn } from "@/shared/utils/cn";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassCard = ({ children, className }: GlassCardProps) => {
  return (
    <div className={cn(
      "glass-card rounded-2xl p-6 transition-all duration-300",
      className
    )}>
      {children}
    </div>
  );
};