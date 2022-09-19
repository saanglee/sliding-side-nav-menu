import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import Icon from '../Icon';
import cx from 'classnames';
import styles from './navigation.module.scss';
import NavHeader from './navHeader/NavHeader';
import NavList from './NavList';
import NavFooter from './navFooter/NavFooter';
import { isDarkMode, isOpenMenu } from '../../store/global';

const Navigation = () => {
  const [isOpen, setIsOpen] = useRecoilState(isOpenMenu);
  const isDark = useRecoilValue(isDarkMode);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={cx(
        styles.navContainer,
        { [styles.openNavContainer]: isOpen },
        { [styles.navDark]: isDark }
      )}
    >
      <button
        type='button'
        onClick={handleClick}
        className={cx(styles.arrowBtn, { [styles.openArrowBtn]: isOpen })}
      >
        <div className={cx(styles.navButtonIcon, { [styles.rotate]: isOpen })}>
          <Icon icon='RightArrowIcon' color='white' size={31} />
        </div>
      </button>
      <div className={styles.navWrapper}>
        <NavHeader />
        <NavList />
      </div>
      <NavFooter />
    </div>
  );
};

export default Navigation;
