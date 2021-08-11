import React from 'react';
import { MainLayout } from '../../components/MainLayout';
import { PostsBody } from '../../components//PostsBody';
import { LoadPostsButton } from '../../components/LoadPostsButton';
import { PostsProvider } from '../../contexts/PostsContext';

const App = () => (
  <PostsProvider>
    <MainLayout>
      <PostsBody />
      <LoadPostsButton />
    </MainLayout>
  </PostsProvider>
);

export default App;
