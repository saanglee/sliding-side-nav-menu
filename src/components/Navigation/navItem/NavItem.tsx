import { useRecoilValue } from 'recoil';
import { isDarkMode, isOpenMenu } from '../../../store/global';
import { cx } from '../../../styles';
import Icon, { IconType } from '../../Icon';
import styles from './navItem.module.scss';

interface NavItemProps {
  text: string;
  icon: IconType;
  index?: number;
  selectedItem?: string;
  handleClick?: (...args: any) => void;
  current?: string;
}

const NavItem = ({ text, icon, index }: NavItemProps) => {
  const isDark = useRecoilValue(isDarkMode);
  const isOpen = useRecoilValue(isOpenMenu);

  return (
    <li
      value={index}
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
