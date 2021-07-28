import React, { createContext, useState, useEffect } from "react"
import { IPostsContext, NewPostData } from './types'
import { PostModel } from '../../models';
import { server } from '../../utils/server';
import { POSTS_BASE_URL } from '../../constants';

export const PostsContext = createContext<IPostsContext | null>(null);

export const PostsProvider: React.FC = ({children}) => {
  const [posts, setPosts] = useState<PostModel[]>([])

  const fetchPosts = async () => {
    const response = await server.get(POSTS_BASE_URL)
    const data = await response.json()
    
    setPosts(data)
  }

  const createPost = async (postData: NewPostData) => {
    const {title, blob} = postData;
    const response = await server.post(POSTS_BASE_URL, { post: { title }, blob })
    const post = await response.json()

    setPosts([
      post,
      ...posts
    ]);

    return post;
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const contextVal: IPostsContext = {
    posts,
    createPost
  }

  return (
    <PostsContext.Provider value={contextVal}>
      {children}
    </PostsContext.Provider>
  )
}
