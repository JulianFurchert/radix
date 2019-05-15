import * as React from 'react';
import { BaseIconProps } from './types';

interface ChevronUpIconProps extends BaseIconProps {
  size?: '25' | '15';
  type?: 'outline';
}

export const ChevronUpIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: ChevronUpIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg
        width="25"
        height="25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M18.5 15.5l-6-6-6 6"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === 'outline' && size === '15') {
    return (
      <svg
        width="15"
        height="15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M11.5 9.5l-4-4-4 4"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(
    `ChevronUpIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default ChevronUpIcon;
