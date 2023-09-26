'use client';

import React, { FC } from 'react';
import classNames from 'classnames';

import { ColorType, ICoreUIBaseProps, XPosition } from '../types';

interface IProgressBarProps extends ICoreUIBaseProps {
  value?: number;
  max?: number;
  color?: ColorType;
  position?: XPosition;
  positionValue?: 'left' | 'right' | 'center';
  textClassName?: string;
}

const ProgressBar: FC<IProgressBarProps> = ({
  className,
  value = 0,
  max = 100,
  position = 'start',
  color = 'primary',
  positionValue = 'center',
  textClassName = ''
}) => {
  const percent = (value / max) * 100;
  return (
    <div className={classNames('abc-progress', className, `theme-${color}`)} role="progressbar">
      <div
        className={classNames(
          'abc-progress__bar',
          position === 'end' && 'absolute right-0',
          positionValue === 'left' ? 'text-left' : positionValue === 'right' ? 'text-right' : 'text-center'
        )}
        style={{ width: percent + '%' }}
      >
        <span className={`abc-progress__text ${textClassName}`}>{value}</span>
      </div>
    </div>
  );
};

ProgressBar.displayName = 'ProgressBar';

export default ProgressBar;
