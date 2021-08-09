import React from 'react';
import { Modal } from '../Modal';
import { ModalTitle } from '../ModalTitle';
import { PostViewerImage } from './PostViewer.styled';
import { PostViewerProps } from './types';

export const PostViewer = ({ post }: PostViewerProps) => (
  <>
    <ModalTitle>
      {post.title}
    </ModalTitle>

    <PostViewerImage src={post.imageUrl} />
  </>
)
