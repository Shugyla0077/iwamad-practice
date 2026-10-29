import { Link } from 'react-router'

export const NotFoundPage = () => {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-6 max-w-sm w-full text-center">
      <h2 className="text-2xl font-bold mb-2 text-rose-600">404</h2>
      <p className="text-gray-600 mb-4">Page not found.</p>
      <Link to="/" className="text-indigo-600 font-medium underline">
        Back to Home
      </Link>
    </section>
  )
}
