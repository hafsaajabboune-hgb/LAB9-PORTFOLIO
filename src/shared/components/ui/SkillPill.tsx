import { cn } from "@/shared/utils/cn";

interface SkillPillProps {
  skill: string;
  className?: string;
}

export const SkillPill = ({ skill, className }: SkillPillProps) => {
  return (
    <span className={cn(
      "px-3 py-1 text-sm rounded-full bg-brand-500/10 text-brand-300 border border-brand-500/20",
      className
    )}>
      {skill}
    </span>
  );
};