import { Link } from 'react-router-dom';
import { IconType } from '../Icon';
import NavItem from './navItem/NavItem';

const navItems = ['Dashboard', 'Schedule', 'Analytics', 'Likes', 'User'];

const NavList = () => {
  return (
    <nav>
      <ul>
        {navItems.map((item: string, index: number) => {
          const link = item.charAt(0).toUpperCase() + item.slice(1);
          const icon = `${item}Icon` as IconType;

          return (
            <Link to={link} key={item}>
              <NavItem text={item} icon={icon} index={index} />
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavList;
