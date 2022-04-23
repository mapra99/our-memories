import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { AlbumsContext } from '../../contexts/AlbumsContext';
import { Title } from '../../components/Title';
import { NewPhoto } from '../../components/NewPhoto';
import { PostsGallery } from '../../components/PostsGallery';
import {
  AlbumDetailsContainer,
  AlbumDetailPosts,
  AlbumDetailsHeading,
  AlbumDetailsActions
} from './styled';

export const AlbumDetails = () => {
  const { id } = useParams();
  const { currentUser } = useContext(AuthContext)
  const { albums, fetchAlbums } = useContext(AlbumsContext)

  useEffect(() => {
    fetchAlbums()
  }, [])

  const album = albums.find(album => album.id === Number(id));
  if (!album) return null;

  const { name, posts, user } = album;

  return (
    <AlbumDetailsContainer>
      <AlbumDetailsHeading>
        <Title>{ name } - by { user.name }</Title>
        <AlbumDetailsActions>
          { user.id === currentUser?.id && (
            <NewPhoto albumId={album.id} />
          )}
        </AlbumDetailsActions>
      </AlbumDetailsHeading>
      <AlbumDetailPosts>
        <PostsGallery posts={posts} />
      </AlbumDetailPosts>
    </AlbumDetailsContainer>
  )
}
