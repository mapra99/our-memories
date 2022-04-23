import React from 'react';
import { AlbumsListProps } from './types';
import { AlbumThumbnail } from '../AlbumThumbnail';
import { AlbumsListContainer } from './styled';

export const AlbumsList = ({ albums }: AlbumsListProps) => (
  <AlbumsListContainer>
    { albums.map(album => (
      <AlbumThumbnail key={album.id} album={album} />
    )) }
  </AlbumsListContainer>
)
