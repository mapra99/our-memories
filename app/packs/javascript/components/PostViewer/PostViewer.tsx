import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { ModalTitle } from '../ModalTitle';
import { DangerButton } from '../DangerButton';
import {
  PostViewerImage,
  PostViewerActions } from './PostViewer.styled';
import { PostViewerProps } from './types';

export const PostViewer = ({ post, onDelete }: PostViewerProps) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <ModalTitle>
        {post.title}
      </ModalTitle>

      <PostViewerImage src={post.imageUrl} />

      <PostViewerActions>
        { currentUser.id === post.user.id && (
          <DangerButton onClick={onDelete}>
            Delete
          </DangerButton>
        ) }
      </PostViewerActions>
    </>
  )
}
