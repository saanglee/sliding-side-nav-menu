import { ReactElement } from 'react';
import * as icons from '../../assets/index';

export type IconType = keyof typeof icons;
export const iconTypes: IconType[] = Object.keys(icons) as IconType[];

interface IconProps {
  icon: IconType;
  color?: '#666666';
  stroke?: string;
  size?: string | number;
  onClick?: (...args: any) => void;
}

const Icon = ({
  icon,
  stroke,
  color,
  size,
  onClick,
}: IconProps): ReactElement => {
  const SvgIcon = icons[icon];
  const strockColor = stroke;
  const width =
    size &&
    (typeof size === 'number' ? `${size}px` : `${size.replace('px', '')}px`);

  return (
    <SvgIcon
      onClick={onClick}
      fill={color}
      stroke={strockColor}
      width={width}
    />
  );
};

export default Icon;
