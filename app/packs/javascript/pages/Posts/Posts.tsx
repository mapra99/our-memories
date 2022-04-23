import React, { useEffect, useContext } from 'react';
import { PostsContext } from '../../contexts/PostsContext';
import { useScroll } from '../../hooks/useScroll'
import { PostsBody } from '../../components/PostsBody';
import { LoadPostsButton } from '../../components/LoadPostsButton';

export const Posts = () => {
  const { scrollY } = useScroll();
  const { fetchPageOnCallback } = useContext(PostsContext);

  useEffect(() => {
    const windowBottom = document.body.clientHeight - window.innerHeight;
    if (scrollY > windowBottom - 200 ) fetchPageOnCallback()
  }, [scrollY])

  return (
    <>
      <PostsBody />
      <LoadPostsButton />
    </>
  )
}
