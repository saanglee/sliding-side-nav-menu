import React from 'react';
import logo from '../../../assets/logo.png';

import cx from 'classnames';
import styles from './navHeader.module.scss';

const NavHeader = () => {
  return (
    <div className={styles.navHeader}>
      <div className={styles.titleWrapper}>
        <img src={logo} alt='logo' />
        <div className={styles.title}>
          <h2>I M Fine SD Team</h2>
          <p>Web Developer</p>
        </div>
      </div>
      <input type='text' placeholder='Search... ' />
    </div>
  );
};

export default NavHeader;
