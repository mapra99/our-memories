import React from 'react';
import { PostThumbnailProps } from './types';
import {
  ThumbnailContainer,
  ThumbnailImage,
  ThumbnailHoverContainer,
  ThumbnailTitle } from './PostThumbnail.styled';
import { useBreakpoint } from '../../hooks/useBreakpoint'

export const PostThumbnail = ({post}: PostThumbnailProps) => {
  const { desktop } = useBreakpoint();

  return (
    <ThumbnailContainer>
      <ThumbnailImage src={post.imageUrl} alt={post.title} />
      { desktop && (
        <ThumbnailHoverContainer>
          <ThumbnailTitle>
            {post.title}
          </ThumbnailTitle>
        </ThumbnailHoverContainer>
      )}
    </ThumbnailContainer>
  )
}
