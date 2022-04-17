import React from 'react';
import { MainHeader } from '../../components/MainHeader';
import { MainLayoutProps } from './types';

import {
  MainLayoutContainer
} from './MainLayout.styled';

export const MainLayout = ({ children }: MainLayoutProps) => (
  <MainLayoutContainer>
    <MainHeader />
    {children}
  </MainLayoutContainer>
)
