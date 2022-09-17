import React from 'react';
import Navigation from '../../components/Navigation';
import { Outlet } from 'react-router-dom';
import styles from './layout.module.scss';

const Layout = () => {
  return (
    <div className={styles.layoutContainer}>
      <Navigation />
      <main className={styles.layoutMain}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
