import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ROUTES from '../routes';
import { Posts } from '../../pages/Posts';

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path={ROUTES.ROOT} element={<Posts />} />
      <Route path={ROUTES.POSTS.INDEX} element={<Posts />} />
    </Routes>
  </BrowserRouter>
)
