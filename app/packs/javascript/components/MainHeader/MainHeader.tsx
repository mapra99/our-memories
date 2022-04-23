import React from 'react';
import { Link } from 'react-router-dom';
import { MyUnsplashIcon } from '../../icons/MyUnsplashIcon';
import { SearchBar } from '../SearchBar';
import { NewPhoto } from '../NewPhoto';
import { LogoutButton } from '../LogoutButton'
import { MainHeaderContainer, MainHeaderRightContainer } from './MainHeader.styled';
import { useBreakpoint } from '../../hooks/useBreakpoint'
import ROUTES from '../../navigation/routes'

export const MainHeader = () => {
  const { mobile } = useBreakpoint()

  return (
    <MainHeaderContainer>
      <a href={ROUTES.ROOT}>
        <MyUnsplashIcon />
      </a>
      { !mobile && <SearchBar /> }
      <MainHeaderRightContainer>
        <NewPhoto />
        <LogoutButton />
      </MainHeaderRightContainer>
    </MainHeaderContainer>
  )
}
