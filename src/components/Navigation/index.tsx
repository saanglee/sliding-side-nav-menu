import NavList from './NavList';

import NavFooter from './navFooter/NavFooter';
import logo from '../../assets/logo.png';
import { useState } from 'react';
import Icon from '../Icon';
import cx from 'classnames';
import styles from './navigation.module.scss';
import NavHeader from './navHeader/NavHeader';
// className={cx(styles.AddtoCartMobile, { [styles.AddtoCartPc]: isDesktop })}

const Navigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={cx(styles.navContainer, { [styles.openNavContainer]: isOpen })}
    >
      <button type='button' onClick={handleClick} className={styles.navButton}>
        <div className={cx(styles.navButtonIcon, { [styles.rotate]: isOpen })}>
          <Icon icon='RightArrowIcon' />
        </div>
      </button>
      <NavHeader />

      <NavList isOpen={isOpen} />
      <NavFooter />
    </div>
  );
};

export default Navigation;
