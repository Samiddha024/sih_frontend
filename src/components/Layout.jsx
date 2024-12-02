import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <nav className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-gray-800">FSLAKWS</h1>
        </div>
        <ul className="mt-4">
          <li>
            <Link to="/" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">Dashboard</Link>
          </li>
          <li>
            <Link to="/training" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">Training & Testing</Link>
          </li>
          <li>
            <Link to="/keywords" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">Keyword Management</Link>
          </li>
        </ul>
      </nav>
      
      {/* Main content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
