import React from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { PostsProvider } from '../contexts/PostsContext';
import { AuthProvider } from '../contexts/AuthContext';
import { AppRouter } from '../navigation/AppRouter';

const App = () => (
  <AuthProvider>
    <PostsProvider>
      <MainLayout>
        <AppRouter />
      </MainLayout>
    </PostsProvider>
  </AuthProvider>
);

export default App;
