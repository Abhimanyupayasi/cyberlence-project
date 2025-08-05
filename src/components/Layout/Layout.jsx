import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Breadcrumb from './Breadcrumb';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      
      
      <div className="drawer-content flex flex-col">
        <Navbar />
        <main className="flex-1 p-4 bg-base-200">
          <Breadcrumb />
          <Outlet />
        </main>
      </div>
      
      {/* Sidebar */}
      <Sidebar />
    </div>
  );
};

export default Layout;