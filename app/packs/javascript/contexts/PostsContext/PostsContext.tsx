import React, { createContext, useEffect } from "react"
import { IPostsContext, NewPostData } from './types'
import { PostModel } from '../../models';
import { server } from '../../utils/server';
import { usePagination } from '../../hooks/usePagination';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import { POSTS_BASE_URL } from '../../constants';

export const PostsContext = createContext<IPostsContext | null>(null);

export const PostsProvider: React.FC = ({children}) => {
  const { mobile } = useBreakpoint();
  const {
    data: posts,
    setData: setPosts,
    fetchPage,
    fetchPageOnCallback,
    loading: loadingPostsFetch,
    end: endPostsFetch } = usePagination<PostModel>({url: POSTS_BASE_URL, limit: mobile ? 5 : 10 })

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
    fetchPage()
  }, [])

  const contextVal: IPostsContext = {
    posts,
    createPost,
    fetchPageOnCallback,
    loadingPostsFetch,
    endPostsFetch
  }

  return (
    <PostsContext.Provider value={contextVal}>
      {children}
    </PostsContext.Provider>
  )
}
