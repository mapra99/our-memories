import React from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { AlbumsProvider } from '../contexts/AlbumsContext';
import { PostsProvider } from '../contexts/PostsContext';
import { AuthProvider } from '../contexts/AuthContext';
import { AppRouter } from '../navigation/AppRouter';

const App = () => (
  <AuthProvider>
    <AlbumsProvider>
      <PostsProvider>
        <MainLayout>
          <AppRouter />
        </MainLayout>
      </PostsProvider>
    </AlbumsProvider>
  </AuthProvider>
);

export default App;
