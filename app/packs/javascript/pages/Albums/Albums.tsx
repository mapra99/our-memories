import React, { useContext, useEffect } from 'react';
import { AlbumsContext } from '../../contexts/AlbumsContext'
import { AlbumsList } from '../../components/AlbumsList';
import { Title } from '../../components/Title';
import { AlbumsContainer } from './styled';  

export const Albums = () => {
  const { albums, fetchAlbums } = useContext(AlbumsContext)

  useEffect(() => {
    fetchAlbums()
  }, [])

  return (
    <AlbumsContainer>
      <Title>Albums</Title>
      <AlbumsList albums={albums} />
    </AlbumsContainer>
  )
}
