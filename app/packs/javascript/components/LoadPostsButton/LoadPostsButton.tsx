import React, { useContext } from 'react';
import { PostsContext } from '../../contexts/PostsContext';
import { LoadingSpinner } from '../LoadingSpinner';
import { StyledLoadPostsButton, LoadingSpinnerContainer } from './LoadPostsButton.styled';

export const LoadPostsButton = () => {
  const { fetchPageOnCallback, loadingPostsFetch, endPostsFetch } = useContext(PostsContext);
  
  if (loadingPostsFetch) return (
    <LoadingSpinnerContainer>
      <LoadingSpinner />
    </LoadingSpinnerContainer>
  )

  return (
    <StyledLoadPostsButton onClick={fetchPageOnCallback}>
      {endPostsFetch ? "You got to the end :)" : "See more"}
    </StyledLoadPostsButton>
  )
}
