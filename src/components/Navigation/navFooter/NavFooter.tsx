import React, { useState } from 'react';
import Icon from '../../Icon';
import cx from 'classnames';
import styles from './navFooter.module.scss';
// className={cx(styles.AddtoCartMobile, { [styles.AddtoCartPc]: isDesktop })}

const NavFooter = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className={styles.navFooterContainer}>
      <div className={styles.logoutWrapper}>
        <Icon icon='LogoutIcon' />
        <span>Logout</span>
      </div>
      <div>
        <Icon icon='DarkModeIcon' />
        <button
          type='button'
          onClick={handleToggle}
          className={cx(styles.toggleButton, { [styles.active]: isDarkMode })}
        >
          <span
            className={cx(styles.toggleSwitch, { [styles.active]: isDarkMode })}
          >
            Darkmode
          </span>
        </button>
      </div>
    </div>
  );
};

export default NavFooter;
