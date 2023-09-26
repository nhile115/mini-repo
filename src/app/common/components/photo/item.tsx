import React, { forwardRef, ReactNode, useMemo } from 'react';
import classNames from 'classnames';
import { IComponentBaseProps } from '../../interfaces';


export interface IPhotoItemProps extends IComponentBaseProps {
  item: string;
}

const PhotoItem = forwardRef<HTMLDivElement, IPhotoItemProps>(({ className,item }, ref) => {

  return (
    <div
      ref={ref}
      className={classNames('comp-photo-item',className)}
    >
      {item}
    </div>
  );
});

PhotoItem.displayName = 'Accordion.Item';

export default PhotoItem;
