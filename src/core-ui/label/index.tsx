import React, { FC } from 'react';
import classNames from 'classnames';

import { Icon } from '@/core-ui';
import { ColorType } from '@/core-ui/types';

import { IComponentBaseProps } from '@/common/interfaces';

interface ILabelProps extends IComponentBaseProps {
  iconName?: string;
  text?: string;
  onClick?: () => void;
  color?: ColorType;
}

const Label: FC<ILabelProps> = ({ iconName, text, className, color = 'light', onClick, ...rest }) => {
  if (!text && !iconName) return null;
  let labelColor: string;

  switch (color) {
    case 'dark':
      labelColor = 'text-slate-700';
      break;
    case 'light':
      labelColor = 'text-slate-50';
      break;
    case 'primary':
      labelColor = 'bg-primary-500';
      break;
    case 'secondary':
      labelColor = 'bg-slate-500';
      break;
    case 'danger':
      labelColor = 'bg-red-500';
      break;
    case 'warning':
      labelColor = 'bg-amber-500';
      break;
    case 'success':
      labelColor = 'bg-emerald-500';
      break;
    case 'info':
      labelColor = 'bg-sky-500';
      break;
    default:
      labelColor = 'text-slate-50';
      break;
  }

  return (
    <div
      className={classNames(
        'abc-label flex items-center justify-center gap-1 text-sm md:text-base',
        className,
        labelColor
      )}
      onClick={onClick}
      data-testid="label"
      {...rest}
    >
      {iconName && <Icon size={18} name={iconName} />}
      {text && <span>{text}</span>}
    </div>
  );
};

export default Label;
