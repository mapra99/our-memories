import React, { useState } from 'react';
import { PostViewerModal } from '../PostViewerModal';
import { PostThumbnailProps } from './types';
import {
  ThumbnailContainer,
  ThumbnailImage,
  ThumbnailHoverContainer,
  ThumbnailTitle } from './PostThumbnail.styled';
import { useBreakpoint } from '../../hooks/useBreakpoint'

export const PostThumbnail = ({post}: PostThumbnailProps) => {
  const [viewerVisible, setViewerVisible] = useState(false);
  const { desktop } = useBreakpoint();

  return (
    <>
      <ThumbnailContainer onClick={() => setViewerVisible(true)}>
        <ThumbnailImage src={post.imageUrl} alt={post.title} />
        { desktop && (
          <ThumbnailHoverContainer>
            <ThumbnailTitle>
              {post.title}
            </ThumbnailTitle>
          </ThumbnailHoverContainer>
        )}
      </ThumbnailContainer>

      { viewerVisible && (
        <PostViewerModal
          post={post}
          onClose={() => setViewerVisible(false)}
        /> 
      )}
    </>
  )
}
