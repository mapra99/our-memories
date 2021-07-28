import React from 'react';
import { MainLayout } from '../../components/MainLayout';
import { PostsBody } from '../../components//PostsBody';
import { PostsProvider } from '../../contexts/PostsContext';

const App = () => (
  <PostsProvider>
    <MainLayout>
      <PostsBody />
    </MainLayout>
  </PostsProvider>
);

export default App;
