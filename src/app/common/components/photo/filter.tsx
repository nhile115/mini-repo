import { ChangeEvent, forwardRef, ReactNode } from 'react';
import classNames from 'classnames';
import Input from '@/core-ui/input';
import { IComponentBaseProps } from '../../interfaces';



export interface IPhotoFilterProps extends IComponentBaseProps {
  lable?:string;
  value?: string;
  onTextChange?: (e: ChangeEvent<HTMLInputElement>)=>void;
}

const PhotoFilter = forwardRef<HTMLButtonElement, IPhotoFilterProps>(({ className,lable,value,onTextChange}, ref) => {

  return (
   <div className={classNames('abc-photo-filter',className)}>
    <h4>{lable}</h4>
    <Input value={value} onChange={(e)=>onTextChange?.(e)}/>
   </div>
  );
});

PhotoFilter.displayName = 'Accordion.Header';

export default PhotoFilter;
