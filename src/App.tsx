import './App.css';
import avatarImg from './assets/shugy.jpeg';
import { Header } from './components/Header';
import { ProfileCard } from './components/ProfileCard';
import { Footer } from './components/Footer';
import type { NavLink } from './components/NavLinkItem';

function App() {
  const profileLinks: NavLink[] = [
    { id: 1, label: 'Email', url: 'mailto:s_zhambibay@kbtu.kz' },
    { id: 2, label: 'GitHub', url: 'https://github.com', isExternal: true },
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-between items-center text-gray-800">
      <Header title="Week 3 Practice: React + TypeScript Profile Card" />

      <main className="flex-grow flex items-center justify-center p-4 w-full">
        <ProfileCard
          name="Shugyla Zhambybay"
          role="Frontend Developer"
          bio="Passionate about web development and building responsive user interfaces. Constantly exploring modern JavaScript frameworks and CSS architecture. In my free time, I build side projects."
          avatarUrl={avatarImg}
          links={profileLinks}
        />
      </main>

      <Footer text="© 2026 Student Profile Project. All rights reserved." />
    </div>
  );
}

export default App;