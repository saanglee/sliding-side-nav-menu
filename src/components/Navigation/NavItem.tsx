import React from 'react';
import { Link } from 'react-router-dom';
import Icon, { IconType, iconTypes } from '../Icon';
import cx from 'classnames';
import styles from './navigation.module.scss';

interface NavItemProps {
  icon: any; // FIXME:
  text: string;
  to: string;
  isOpen: { isOpen: boolean };
}

const NavItem = ({ icon, text, to, isOpen }: NavItemProps) => {
  console.log(iconTypes);
  return (
    <li>
      <Icon icon={icon} color={'#666666'} />
      <span className={cx(styles.item, { [styles.openItem]: isOpen })}>
        <Link to={to}> {text} </Link>
      </span>
    </li>
  );
};

export default NavItem;
