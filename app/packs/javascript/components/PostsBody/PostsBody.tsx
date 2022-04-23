import React, { useContext } from 'react'
import { PostsContext, IPostsContext } from '../../contexts/PostsContext'
import { PostsBodyContainer } from './PostsBody.styled'
import { PostsGallery } from '../PostsGallery'

export const PostsBody = () => {
  const { posts, fetchPageOnCallback } = useContext(PostsContext) as IPostsContext
  const handleCarouselSwap = (_event, newIndex) => {
    if (newIndex >= (posts.length - 5)) fetchPageOnCallback();
  }

  return (
    <PostsBodyContainer>
      <PostsGallery posts={posts} onCarouselSwap={handleCarouselSwap} />
    </PostsBodyContainer>
  )
}
