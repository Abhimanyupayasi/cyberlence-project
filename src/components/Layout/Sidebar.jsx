import { NavLink } from 'react-router-dom';
import { FaHome, FaBook, FaCalculator, FaTasks } from 'react-icons/fa';

const Sidebar = () => {
  const navItems = [
    { path: '/home', name: 'Dashboard', icon: <FaHome /> },
    { path: '/home/courses', name: 'Courses', icon: <FaBook /> },
    { path: '/home/cgpa', name: 'CGPA', icon: <FaCalculator /> },
    { path: '/home/assignments', name: 'Assignments', icon: <FaTasks /> },
  ];

  const closeDrawer = () => {
    document.getElementById('my-drawer').checked = false;
  };

  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer" className="drawer-overlay"></label>
      <ul className="menu p-4 w-80 h-full bg-base-100 text-base-content">
        <li className="mb-4 font-semibold text-xl">Student Portal</li>
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={closeDrawer}
            >
              {item.icon}
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;