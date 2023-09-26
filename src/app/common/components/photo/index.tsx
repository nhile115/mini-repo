'use client';

import React, { forwardRef, ForwardRefExoticComponent, ReactNode, RefAttributes, useEffect } from 'react';
import classNames from 'classnames';
import PhotoFilter, { IPhotoFilterProps } from './filter';
import PhotoList, { IPhotoListProps } from './list';
import { IComponentBaseProps } from '../../interfaces';

interface IPhotoComposition {
  Filter: ForwardRefExoticComponent<IPhotoFilterProps & RefAttributes<HTMLButtonElement>>;
  List: ForwardRefExoticComponent<IPhotoListProps & RefAttributes<HTMLDivElement>>;
}

interface IPhotoProps extends IComponentBaseProps {
  children?: ReactNode;
}

const Photo = forwardRef<HTMLDivElement, IPhotoProps>(({ className, children }, ref) => {

  return (
    <div ref={ref} className={classNames(className)}>
      {children}
    </div>
  );
}) as ForwardRefExoticComponent<IPhotoProps & RefAttributes<HTMLDivElement>> & IPhotoComposition;

Photo.Filter = PhotoFilter;
Photo.List = PhotoList;

Photo.displayName = 'Photo';

export default Photo;
