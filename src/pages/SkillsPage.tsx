import { SkillBadge, type Skill } from '../components/SkillBadge'

export const SkillsPage = () => {
  const skills: Skill[] = [
    { id: 1, label: 'React' },
    { id: 2, label: 'TypeScript' },
    { id: 3, label: 'Vite' },
    { id: 4, label: 'Tailwind CSS' },
    { id: 5, label: 'Git & GitHub' },
  ]

  return (
    <section className="bg-white rounded-2xl shadow-lg p-6 max-w-sm w-full text-center">
      <h2 className="text-xl font-semibold mb-4">My Skills</h2>
      <div className="flex flex-wrap gap-2 justify-center">
        {skills.map((skill) => (
          <SkillBadge key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  )
}
