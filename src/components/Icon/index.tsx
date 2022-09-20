import { ReactElement } from 'react';
import * as icons from '../../assets/index';

export type IconType = keyof typeof icons;
export const iconTypes: IconType[] = Object.keys(icons) as IconType[];

interface IconProps {
  icon: IconType;
  color?: iconPalette;
  stroke?: string;
  size?: string | number;
  onClick?: (...args: any) => void;
}

export type iconPalette = '#666666' | 'white' | '#ffffff';

const Icon = ({
  icon,
  stroke,
  color,
  size,
  onClick,
}: IconProps): ReactElement => {
  const SvgIcon = icons[icon];
  const strockColor = stroke;
  const height =
    size &&
    (typeof size === 'number' ? `${size}px` : `${size.replace('px', '')}px`);

  return (
    <SvgIcon
      onClick={onClick}
      fill={color}
      stroke={strockColor}
      height={height}
    />
  );
};

export default Icon;
