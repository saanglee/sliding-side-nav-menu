import { atom } from 'recoil';

export const isOpenMenu = atom({
  key: 'isOpenMenu',
  default: false,
});

export const isDarkMode = atom({
  key: 'isDarkMode',
  default: false,
});
