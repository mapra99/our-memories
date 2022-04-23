import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ROUTES from '../routes';
import { Posts } from '../../pages/Posts';
import { Albums } from '../../pages/Albums';

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path={ROUTES.ROOT} element={<Albums />} />
      <Route path={ROUTES.POSTS.INDEX} element={<Posts />} />
      <Route path={ROUTES.ALBUMS.INDEX} element={<Albums />} />
    </Routes>
  </BrowserRouter>
)
