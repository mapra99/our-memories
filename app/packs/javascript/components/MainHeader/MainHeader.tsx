import React, { useContext } from 'react';
import { MyUnsplashIcon } from '../../icons/MyUnsplashIcon';
import { SearchBar } from '../SearchBar';
import { NewPhoto } from '../NewPhoto';
import { MainHeaderContainer, MainHeaderNewPhotoContainer } from './MainHeader.styled';
import { useBreakpoint } from '../../hooks/useBreakpoint'
import { AuthContext } from '../../contexts/AuthContext'

export const MainHeader = () => {
  const { mobile } = useBreakpoint()
  const { currentUser } = useContext(AuthContext)

  return (
    <MainHeaderContainer>
      <MyUnsplashIcon />
      { !mobile && <SearchBar /> }
      <MainHeaderNewPhotoContainer>
        <NewPhoto />
        <h1>{currentUser.name}</h1>
      </MainHeaderNewPhotoContainer>
    </MainHeaderContainer>
  )
}
