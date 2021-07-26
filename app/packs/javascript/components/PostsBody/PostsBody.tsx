import React, { useContext } from 'react'
import { PostsContext, IPostsContext } from '../../contexts/PostsContext'
import { PostsBodyContainer } from './PostsBody.styled'
import { PostsGallery } from '../PostsGallery'

export const PostsBody = () => {
  const {posts} = useContext(PostsContext) as IPostsContext

  return (
    <PostsBodyContainer>
      <PostsGallery posts={posts} />
    </PostsBodyContainer>
  )
}
