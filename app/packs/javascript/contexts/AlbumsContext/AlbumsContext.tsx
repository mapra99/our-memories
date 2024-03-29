import React, { useState, createContext } from "react"
import { IAlbumsContext, AlbumPayload } from './types'
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

  const fetchAlbum = async (id) => {
    const response = await server.get(`${ALBUMS_BASE_URL}/${id}`);
    const data = await response.json();

    const newAlbums = [...albums];
    const newAlbumIndex = newAlbums.findIndex(a => a.id === id) || 0;
    newAlbums[newAlbumIndex] = data;

    setAlbums(newAlbums);
  }

  const createAlbum = async (payload: AlbumPayload) => {
    const response = await server.post(`${ALBUMS_BASE_URL}`, { album: payload });
    const data = await response.json();

    setAlbums([
      data,
      ...albums
    ])

    return data;
  }

  const contextVal: IAlbumsContext = {
    albums,
    fetchAlbums,
    fetchAlbum,
    createAlbum
  }

  return (
    <AlbumsContext.Provider value={contextVal}>
      {children}
    </AlbumsContext.Provider>
  )
}
