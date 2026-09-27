export interface Skill {
  id: number;
  label: string;
}

interface SkillBadgeProps {
  skill: Skill;
}

export const SkillBadge = ({ skill }: SkillBadgeProps) => {
  return <span className="skill-badge">{skill.label}</span>;
};