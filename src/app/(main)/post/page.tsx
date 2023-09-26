import React from 'react';
import { Metadata } from 'next';
import Post from '@/modules/post/components/post-page';

export default async function PostPage() {
  return (
    <>
      <Post/>
    </>
  );
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  return { title: 'Post Page', description: 'Post Page Description' + params.id };
}
