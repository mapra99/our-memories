import React, { useContext } from 'react';
import { Modal } from '../Modal';
import { PostViewer } from '../PostViewer';
import { PostsContext, IPostsContext } from '../../contexts/PostsContext';
import { PostsViewerCarouselProps } from './types';

export const PostsViewerCarousel = ({ activePost, onClose, onDelete }: PostsViewerCarouselProps) => {
  const {posts, fetchPageOnCallback} = useContext(PostsContext) as IPostsContext;

  const handleCarouselMoved = (_event, newIndex) => {
    if (newIndex >= (posts.length - 5)) fetchPageOnCallback();
  }

  return (
    <Modal
      onClose={onClose}
      maxWidth="1200px"
      carousel
      start={posts.findIndex(post => post.id === activePost.id) || 0}
      onMoved={handleCarouselMoved}
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
}
