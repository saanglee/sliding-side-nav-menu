import cx from 'classnames';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { isDarkMode, isOpenMenu } from '../../../store/global';
import Icon, { IconType } from '../../Icon';
import styles from './navItem.module.scss';

interface NavItemProps {
  text: string;
  icon: IconType;
  index?: number;
  selectedItem?: string;
  handleClick?: any; // FIXME: any 고치기
  current?: string;
  hasButton?: boolean;
}

interface Palette {
  blue: '#399fff';
  white: '#ffffff';
}

const NavItem = ({
  text,
  icon,
  index,
  selectedItem,
  handleClick,
  hasButton,
}: NavItemProps) => {
  const isDark = useRecoilValue(isDarkMode);
  const isOpen = useRecoilValue(isOpenMenu);
  const [current, setCurrent] = useState<number>();
  const [selected, setSelected] = useState<boolean>(false);
  // const [color, setColor] = useState({
  //   backgroundColor: '#ffffff',
  //   iconColor: '#666666',
  //   fontColor: '#666666',
  // });

  // const handleClickMenu = (
  //   evnet: React.MouseEvent<HTMLLIElement, MouseEvent>
  // ) => {
  //   console.log(index);
  //   const currentIndex = index;
  //   setCurrent(currentIndex);

  //   if (current === index) {
  //     setSelected(!selected);
  //   } else {
  //     setSelected(false);
  //   }
  // };

  return (
    <li
      value={index}
      // onClick={handleClickMenu}
      className={cx(
        styles.itemContainer,
        {
          [styles.openItemContainer]: isOpen,
        },
        {
          [styles.darkItemConatiner]: isDark,
        }
      )}
    >
      <div className={styles.iconWrapper}>
        <Icon icon={icon} color={'#666666'} size={47} />
      </div>
      <span className={styles.textWrapper}>{text}</span>
    </li>
  );
};

export default NavItem;
