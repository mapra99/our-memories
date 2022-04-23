import React, { useState, createContext } from "react"
import { IAlbumsContext } from './types'
import { AlbumModel } from '../../models';
import { server } from '../../utils/server';
import { ALBUMS_BASE_URL } from '../../constants';

export const AlbumsContext = createContext<IAlbumsContext | null>(null);

export const AlbumsProvider: React.FC = ({children}) => {
  const [albums, setAlbums] = useState<AlbumModel[]>([])

  const fetchAlbums = async () => {
    const response = await server.get(ALBUMS_BASE_URL);
    const data = await response.json();
    setAlbums(data);

    return data
  }

  const contextVal: IAlbumsContext = {
    albums,
    fetchAlbums
  }

  return (
    <AlbumsContext.Provider value={contextVal}>
      {children}
    </AlbumsContext.Provider>
  )
}
