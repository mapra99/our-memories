import React, { useContext } from 'react';
import { Modal } from '../Modal';
import { PostViewer } from '../PostViewer';
import { PostsContext, IPostsContext } from '../../contexts/PostsContext';
import { PostsViewerCarouselProps } from './types';

export const PostsViewerCarousel = ({ activePost, onClose, onDelete }: PostsViewerCarouselProps) => {
  const {posts} = useContext(PostsContext) as IPostsContext;

  console.log(posts.findIndex(post => post.id === activePost.id) || 0)

  return (
    <Modal
      onClose={onClose}
      maxWidth="1200px"
      carousel={true}
      start={posts.findIndex(post => post.id === activePost.id) || 0}
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
