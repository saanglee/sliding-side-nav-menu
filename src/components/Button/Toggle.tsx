import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { isDarkMode } from '../../store/global';
import { cx } from '../../styles';
import styles from './toggle.module.scss';

const Toggle = () => {
  const [toggle, setToggle] = useState(false);
  const [isDark, setIsDark] = useRecoilState(isDarkMode);

  const handleToggle = () => {
    setToggle(!toggle);
    setIsDark(!isDark);
  };
  return (
    <>
      <button
        onClick={handleToggle}
        className={cx(styles.toggle, { [styles.toggleActive]: toggle })}
      >
        <span
          className={cx(styles.toggleSwitch, { [styles.toggleActive]: toggle })}
        ></span>
      </button>
    </>
  );
};

export default Toggle;
