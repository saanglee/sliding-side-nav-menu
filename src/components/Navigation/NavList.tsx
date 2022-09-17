import React from 'react';
import NavItem from './NavItem';
import cx from 'classnames';
import styles from './navigation.module.scss';

const navItems = ['Dashboard', 'Schedule', 'Analytics', 'Likes', 'User'];

const NavList = (isOpen: { isOpen: boolean }) => {
  const open = isOpen;
  return (
    <nav>
      {navItems.map((item: string) => {
        const link = item.charAt(0).toUpperCase() + item.slice(1);
        const icon = `${item}Icon`;
        return (
          <ul
            key={item}
            className={cx(styles.list, { [styles.openList]: isOpen })}
          >
            <NavItem icon={icon} text={item} to={link} isOpen={isOpen} />
          </ul>
        );
      })}
    </nav>
  );
};

export default NavList;
