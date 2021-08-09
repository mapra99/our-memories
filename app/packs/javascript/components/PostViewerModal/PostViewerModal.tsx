import React from 'react';
import { Modal } from '../Modal';
import { ModalTitle } from '../ModalTitle';
import { PostViewerImage } from './PostViewerModal.styled';
import { PostViewerModalProps } from './types';

export const PostViewerModal = ({ post, onClose }: PostViewerModalProps) => {
  return (
    <Modal
      onClose={onClose}
      maxWidth="1200px"
    >
      <ModalTitle>
        {post.title}
      </ModalTitle>

      <PostViewerImage src={post.imageUrl} />
    </Modal>
  )
}
