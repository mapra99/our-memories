import React, { useContext, useEffect } from 'react';
import { AlbumsContext } from '../../contexts/AlbumsContext'
import { AlbumsList } from '../../components/AlbumsList';
import { Title } from '../../components/Title';
import { NewAlbum } from '../../components/NewAlbum';
import { AlbumsContainer, AlbumsHeading, AlbumsActions } from './styled';  

export const Albums = () => {
  const { albums, fetchAlbums } = useContext(AlbumsContext)

  useEffect(() => {
    fetchAlbums()
  }, [])

  return (
    <AlbumsContainer>
      <AlbumsHeading>
        <Title>Albums</Title>
        <AlbumsActions>
          <NewAlbum />
        </AlbumsActions>
      </AlbumsHeading>

      <AlbumsList albums={albums} />
    </AlbumsContainer>
  )
}
