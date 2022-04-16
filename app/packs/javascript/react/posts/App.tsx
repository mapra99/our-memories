import React from 'react';
import { MainLayout } from '../../components/MainLayout';
import { PostsBody } from '../../components//PostsBody';
import { LoadPostsButton } from '../../components/LoadPostsButton';
import { PostsProvider } from '../../contexts/PostsContext';
import { AuthProvider } from '../../contexts/AuthContext';

const App = () => (
  <AuthProvider>
    <PostsProvider>
      <MainLayout>
        <PostsBody />
        <LoadPostsButton />
      </MainLayout>
    </PostsProvider>
  </AuthProvider>
);

export default App;
