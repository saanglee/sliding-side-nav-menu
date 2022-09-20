import { useRecoilValue } from 'recoil';
import { Outlet } from 'react-router-dom';
import { isDarkMode } from '../../store/global';
import Navigation from '../../components/Navigation';
import styles from './layout.module.scss';
import cx from 'classnames';

const Layout = () => {
  const isDark = useRecoilValue(isDarkMode);
  return (
    <div
      className={cx(styles.layoutContainer, { [styles.layoutDark]: isDark })}
    >
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
