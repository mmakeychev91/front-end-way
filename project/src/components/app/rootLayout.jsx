import { Outlet } from 'react-router-dom';
import Sidebar from '../ui/sidebar/sidebar';

const RootLayout = () => (
  <div>
    <div>
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  </div>
);

export default RootLayout;
