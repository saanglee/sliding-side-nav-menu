import React, { useState } from 'react';
import cx from 'classnames';
import styles from './navFooter.module.scss';
import Toggle from '../../Button/Toggle';
import NavItem from '../navItem/NavItem';
import Icon from '../../Icon';
import { useRecoilValue } from 'recoil';
import { isDarkMode, isOpenMenu } from '../../../store/global';

const NavFooter = () => {
  const isOpen = useRecoilValue(isOpenMenu);
  const isDark = useRecoilValue(isDarkMode);

  return (
    <div className={cx(styles.navFooterContainer)}>
      <NavItem icon={'LogoutIcon'} text={'Logout'} />

      <li
        className={cx(
          styles.DarkModeWrapper,
          {
            [styles.openDarkModeWrapper]: isOpen,
          },
          {
            [styles.darkMode]: isDark,
          }
        )}
      >
        <div className={styles.iconWrapper}>
          <Icon icon={'DarkModeIcon'} color={'#666666'} size={47} />
        </div>
        <span className={styles.textWrapper}>Dark Mode</span>
        <div className={styles.toggleWrapper}>
          <Toggle />
        </div>
      </li>
    </div>
  );
};

export default NavFooter;
