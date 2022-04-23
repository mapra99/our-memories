import React, { createContext, useContext } from "react"
import { AlbumsContext } from '../AlbumsContext';
import { IPostsContext, NewPostData } from './types'
import { PostModel } from '../../models';
import { server } from '../../utils/server';
import { usePagination } from '../../hooks/usePagination';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import { POSTS_BASE_URL } from '../../constants';

export const PostsContext = createContext<IPostsContext | null>(null);

export const PostsProvider: React.FC = ({children}) => {
  const { fetchAlbum } = useContext(AlbumsContext);
  const { mobile } = useBreakpoint();
  const {
    data: posts,
    setData: setPosts,
    fetchPageOnCallback,
    loading: loadingPostsFetch,
    end: endPostsFetch } = usePagination<PostModel>({url: POSTS_BASE_URL, limit: mobile ? 5 : 10 })

  const createPost = async (postData: NewPostData) => {
    const {title, blob, albumId} = postData;
    const response = await server.post(POSTS_BASE_URL, { post: { title, album_id: albumId }, blob })
    const post = await response.json()

    setPosts([
      post,
      ...posts
    ]);

    await fetchAlbum(albumId);

    return post;
  }

  const deletePost = async (post: PostModel) => {
    await server.del(`${POSTS_BASE_URL}/${post.id}`)

    const newPosts = [...posts]
    const postIndex = newPosts.findIndex(el => el.id === post.id)
    newPosts.splice(postIndex, 1)

    setPosts(newPosts);
  }

  const contextVal: IPostsContext = {
    posts,
    createPost,
    deletePost,
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
