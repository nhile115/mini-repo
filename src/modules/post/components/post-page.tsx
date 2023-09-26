'use client';
import Photo from '@/app/common/components/photo';
import Pagination from '@/core-ui/pagination';
import React, { FC, useEffect, useState } from 'react';
import usePhotoState from '../states';
import { IFilterProps } from '../interfaces';

const Post: FC= ({...rest}) => {
  const photoState = usePhotoState()
  const [filter, setFilter] =useState<IFilterProps>({page:1,limit:10,q:''});

  useEffect(()=>{
    photoState.getPhoto(filter);
  },[filter])

  return (
    <div
      data-testid="comp-post-page"
      {...rest}
    >
      <Photo>
        <Photo.Filter lable='Search' value={filter.q} onTextChange={event => setFilter({ ...filter, q: event.target.value })} />
        <Photo.List items={photoState.data}/>
        <Pagination  
        totalItems={photoState.totalCount}
        currentPage={filter.page}
        itemPerPage={filter.limit}
        onChange={page => setFilter({ ...filter, page })}
        />
      </Photo>
    </div>
  );
};

Post.displayName = 'Post';

export default Post;
