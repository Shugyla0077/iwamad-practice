import avatarImg from '../assets/shugy.jpeg'
import { ProfileCard } from '../components/ProfileCard'
import type { NavLink } from '../components/NavLinkItem'

export const HomePage = () => {
  const profileLinks: NavLink[] = [
    { id: 1, label: 'Email', url: 'mailto:s_zhambibay@kbtu.kz' },
    { id: 2, label: 'GitHub', url: 'https://github.com/Shugyla0077', isExternal: true },
  ]

  return (
    <ProfileCard
      name="Shugyla Zhambybay"
      role="Frontend Developer"
      bio="Passionate about web development and building responsive user interfaces. Constantly exploring modern JavaScript frameworks and CSS architecture."
      avatarUrl={avatarImg}
      links={profileLinks}
    />
  )
}
