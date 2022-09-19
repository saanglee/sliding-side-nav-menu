import cx from 'classnames';
import { MutableRefObject, useRef, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isOpenMenu } from '../../../store/global';
import Toggle from '../../Button/Toggle';
import Icon, { IconType } from '../../Icon';
import styles from './navItem.module.scss';

interface NavItemProps {
  text: string;
  icon: IconType;
  value?: number;
  selectedItem?: string;
  handleClick?: any; // FIXME: any 고치기
  current?: string;
  hasButton?: boolean;
}

const NavItem = ({
  text,
  icon,
  value,
  selectedItem,
  handleClick,
  hasButton,
}: NavItemProps) => {
  const isOpen = useRecoilValue(isOpenMenu);

  const handleClickMenu = () => {
    console.log(value);
  };
  return (
    <li
      value={value}
      onClick={handleClick}
      className={cx(styles.itemContainer, {
        [styles.openItemContainer]: isOpen,
      })}
    >
      <div className={styles.iconWrapper}>
        <Icon icon={icon} color={'#666666'} size={47} />
      </div>
      <span className={styles.textWrapper}>{text}</span>
    </li>
  );
};

export default NavItem;
