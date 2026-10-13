import { Tag } from './ui/Tag'

export interface Skill {
  id: number
  label: string
}

interface SkillBadgeProps {
  skill: Skill
}

export const SkillBadge = ({ skill }: SkillBadgeProps) => {
  return <Tag label={skill.label} />
}