import { NavLink } from 'react-router'
import { useLikes } from '../context/LikesContext'

interface HeaderProps {
  title: string
}

export const Header = ({ title }: HeaderProps) => {
  const { likes } = useLikes()

  return (
    <header className="w-full py-4 bg-white shadow-sm flex flex-col md:flex-row justify-between items-center px-6 gap-3">
      <h1 className="text-xl font-bold m-0">{title}</h1>
      <nav className="flex items-center gap-4">
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}>
          Home
        </NavLink>
        <NavLink to="/skills" className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}>
          Skills
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}>
          Contact
        </NavLink>
        <span className="likes-counter font-semibold text-rose-600">♥ {likes}</span>
      </nav>
    </header>
  )
}
