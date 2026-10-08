import { Outlet } from 'react-router'
import { Header } from './Header'
import { Footer } from './Footer'

export const Layout = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-between items-center text-gray-800 w-full">
      <Header title="Week 4 Practice" />
      <main className="flex-grow flex items-center justify-center p-4 w-full">
        <Outlet />
      </main>
      <Footer text="© 2026 Student Profile Project. All rights reserved." />
    </div>
  )
}
