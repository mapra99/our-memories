import React from 'react';
import { PostsGalleryContainer, PostsGalleryColumn } from './PostsGallery.styled'
import { PostsGalleryProps } from './types'
import { PostThumbnail } from '../PostThumbnail'
import { PostModel } from '../../models/PostModel'
import { splitInChunks } from '../../utils/splitInChunks'
import { useBreakpoint } from '../../hooks/useBreakpoint'

export const PostsGallery = ({ posts }: PostsGalleryProps) => {
  const { mobile } = useBreakpoint();
  const postsChunks = splitInChunks(posts, mobile ? 1 : 3);

  return (
    <PostsGalleryContainer>
      { postsChunks.map((chunk: PostModel[], index: number) => (
        <PostsGalleryColumn key={index}>
          { chunk.map(post => <PostThumbnail post={post} key={post.id} />) }
        </PostsGalleryColumn>
      ))}
    </PostsGalleryContainer>
  )
}
