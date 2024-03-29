import React, { useContext } from 'react';
import { PostsContext } from '../../contexts/PostsContext';
import { Modal } from '../Modal';
import { Title } from '../Title';
import { ModalActionButtons } from '../ModalActionButtons';
import { CancelButton } from '../CancelButton';
import { DangerButton } from '../DangerButton';
import {
  PostDeleteModalProps
} from './types';

export const PostDeleteModal = ({ post, onClose }: PostDeleteModalProps) => {
  const { deletePost } = useContext(PostsContext)

  const handleDelete = async () => {
    await deletePost(post);
    onClose();
  }

  return (
    <Modal onClose={onClose}>
      <Title>
        Are you sure?
      </Title>

      <ModalActionButtons>
          <CancelButton type="button" onClick={onClose} >
            Cancel
          </CancelButton>
          <DangerButton type="submit" onClick={handleDelete}>
            Delete
          </DangerButton>
        </ModalActionButtons>
    </Modal>
  )
}
