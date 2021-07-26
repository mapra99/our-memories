import React, { createContext, useState, useEffect } from "react"
import { useMutation, useQuery } from '@apollo/client';
import { IPostsContext, NewPostData } from './types'
import { CREATE_POST } from '../../api/mutations/posts';
import { FETCH_POSTS } from '../../api/queries/posts';
import { PostModel } from '../../models';

export const PostsContext = createContext<IPostsContext | null>(null);

export const PostsProvider: React.FC = ({children}) => {
  const [posts, setPosts] = useState<PostModel[]>([])
  const [createPostRequest] = useMutation(CREATE_POST)
  const {data: fetchPostsData} = useQuery(FETCH_POSTS)

  const createPost = async (postData: NewPostData) => {
    const {title, blob} = postData;
    const result = await createPostRequest({ variables: { createPostInput: { title, signedBlobId: blob.signed_id }}})
    const post = result.data.createPost

    setPosts([
      post,
      ...posts
    ]);

    return post;
  }

  useEffect(() => {
    if (fetchPostsData) setPosts(fetchPostsData.fetchPosts)
  }, [fetchPostsData])

  const contextVal: IPostsContext = {
    posts,
    createPost,
  }

  return (
    <PostsContext.Provider value={contextVal}>
      {children}
    </PostsContext.Provider>
  )
}
