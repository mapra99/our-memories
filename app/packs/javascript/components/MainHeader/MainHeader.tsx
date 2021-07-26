import React from 'react';
import { MyUnsplashIcon } from '../../icons/MyUnsplashIcon';
import { SearchBar } from '../SearchBar';
import { NewPhoto } from '../NewPhoto';
import { MainHeaderContainer, MainHeaderNewPhotoContainer } from './MainHeader.styled';
import { useBreakpoint } from '../../hooks/useBreakpoint'

export const MainHeader = () => {
  const { mobile } = useBreakpoint()

  return (
    <MainHeaderContainer>
      <MyUnsplashIcon />
      { !mobile && <SearchBar /> }
      <MainHeaderNewPhotoContainer>
        <NewPhoto />
      </MainHeaderNewPhotoContainer>
    </MainHeaderContainer>
  )
}
