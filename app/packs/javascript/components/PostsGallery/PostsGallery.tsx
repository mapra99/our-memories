import React from 'react';
import { PostsGalleryContainer, PostsGalleryColumn } from './PostsGallery.styled'
import { PostsGalleryProps } from './types'
import { PostThumbnail } from '../PostThumbnail'
import { PostModel } from '../../models/PostModel'
import { splitInChunks } from '../../utils/splitInChunks'
import { useBreakpoint } from '../../hooks/useBreakpoint'

export const PostsGallery = ({ posts, onCarouselSwap }: PostsGalleryProps) => {
  const { mobile } = useBreakpoint();
  const postsChunks = splitInChunks(posts, mobile ? 1 : 3);

  return (
    <PostsGalleryContainer>
      { postsChunks.map((chunk: PostModel[], index: number) => (
        <PostsGalleryColumn key={index}>
          { chunk.map(post => (
            <PostThumbnail
              posts={posts}
              activePostIndex={posts.findIndex(p => p.id === post.id)}
              key={post.id}
              onCarouselSwap={onCarouselSwap}
            />)
          )}
        </PostsGalleryColumn>
      ))}
    </PostsGalleryContainer>
  )
}
