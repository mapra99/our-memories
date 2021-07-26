import React from 'react';
import { PostThumbnailProps } from './types';
import {
  ThumbnailContainer,
  ThumbnailImage,
  ThumbnailHoverContainer,
  ThumbnailTitle } from './PostThumbnail.styled';

export const PostThumbnail = ({post}: PostThumbnailProps) => (
  <ThumbnailContainer>
    <ThumbnailImage src={post.imageUrl} alt={post.title} />
    <ThumbnailHoverContainer>
      <ThumbnailTitle>
        {post.title}
      </ThumbnailTitle>
    </ThumbnailHoverContainer>
  </ThumbnailContainer>
)
