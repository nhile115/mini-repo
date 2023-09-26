import React, { forwardRef, ReactNode, useMemo } from 'react';
import classNames from 'classnames';
import PhotoItem from './item';
import { IComponentBaseProps } from '../../interfaces';


export interface IPhotoListProps extends IComponentBaseProps {
  items?: string[];
}

const PhotoList = forwardRef<HTMLDivElement, IPhotoListProps>(({ className, items }, ref) => {

  return (
    <div
      ref={ref}
      className={classNames('comp-photo-list',className)}
    >
        {items?.map((item,index)=>
          <PhotoItem key={index} item={item}/>
)}
    </div>
  );
});

PhotoList.displayName = 'Accordion.Item';

export default PhotoList;
