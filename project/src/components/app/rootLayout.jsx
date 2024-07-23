import { Outlet } from 'react-router-dom';
import Sidebar from '../ui/sidebar/sidebar';
import styles from './rootLayout.module.scss';

const RootLayout = () => (
  <div>
    <div>
      <Sidebar />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  </div>
);

export default RootLayout;
