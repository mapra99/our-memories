import React from 'react';
import { Modal } from '../Modal';
import { PostViewer } from '../PostViewer';
import { PostsViewerCarouselProps } from './types';

export const PostsViewerCarousel = ({ posts, activePostIndex, onClose, onDelete, onCarouselSwap }: PostsViewerCarouselProps) => (
  <Modal
    onClose={onClose}
    maxWidth="1200px"
    carousel
    start={activePostIndex}
    onMoved={onCarouselSwap}
  >
    {posts.map(post => (
      <PostViewer
        key={post.id}
        post={post}
        onDelete={onDelete}
      />
    ))}
  </Modal>
)
