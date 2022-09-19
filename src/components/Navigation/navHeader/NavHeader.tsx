import React from 'react';
import logo from '../../../assets/logo.png';

import cx from 'classnames';
import styles from './navHeader.module.scss';
import Icon from '../../Icon';
import { useRecoilValue } from 'recoil';
import { isDarkMode, isOpenMenu } from '../../../store/global';

const NavHeader = () => {
  const isOpen = useRecoilValue(isOpenMenu);
  const isDark = useRecoilValue(isDarkMode);
  return (
    <div className={cx(styles.navHeader, { [styles.openNavHeader]: isOpen })}>
      <div className={styles.titleWrapper}>
        <img src={logo} alt='logo' />
        <div className={cx(styles.title, { [styles.openTitle]: isOpen })}>
          <h2>I M Fine SD Team</h2>
          <p>Web Developer</p>
        </div>
      </div>

      <div className={styles.inputWrapper}>
        <div className={cx(styles.iconBox, { [styles.iconBoxDark]: isDark })}>
          <span>
            <Icon icon='SearchIcon' color={'#666666'} size='50px' />
          </span>
          <input
            type='text'
            placeholder='Search... '
            className={cx(
              styles.searchInput,
              {
                [styles.openSearchInput]: isOpen,
              },
              { [styles.inputDark]: isDark }
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default NavHeader;
