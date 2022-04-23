import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { PostsViewerCarousel } from '../PostsViewerCarousel';
import { PostDeleteModal } from '../PostDeleteModal';
import { PostThumbnailProps } from './types';
import {
  ThumbnailContainer,
  ThumbnailImage,
  ThumbnailHoverContainer,
  ThumbnailTitle,
  ThumbnailDeleteButton } from './PostThumbnail.styled';
import { useBreakpoint } from '../../hooks/useBreakpoint'

export const PostThumbnail = ({posts, activePostIndex, onCarouselSwap}: PostThumbnailProps) => {
  const { currentUser } = useContext(AuthContext);
  const [viewerVisible, setViewerVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const { mobile } = useBreakpoint();
  const post = posts[activePostIndex];

  const handleDelete = (event) => {
    event.stopPropagation();
    setDeleteModalVisible(true);
  }

  return (
    <>
      <ThumbnailContainer onClick={() => setViewerVisible(true)}>
        <ThumbnailImage src={post.imageUrl} alt={post.title} />
        { !mobile && (
          <ThumbnailHoverContainer>
            <ThumbnailTitle>
              {post.title}
            </ThumbnailTitle>
            { currentUser?.id === post.user.id && (
              <ThumbnailDeleteButton onClick={handleDelete}>
                delete
              </ThumbnailDeleteButton>
            )}
          </ThumbnailHoverContainer>
        )}
      </ThumbnailContainer>

      { viewerVisible && (
        <PostsViewerCarousel
          posts={posts}
          activePostIndex={activePostIndex}
          onClose={() => setViewerVisible(false)}
          onDelete={handleDelete}
          onCarouselSwap={onCarouselSwap}
        />
      )}

      { deleteModalVisible && (
        <PostDeleteModal
          post={post}
          onClose={() => setDeleteModalVisible(false)}
        />
      )}
    </>
  )
}
