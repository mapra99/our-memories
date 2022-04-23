import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AlbumsContext } from '../../contexts/AlbumsContext';
import { Title } from '../../components/Title';
import { PostsGallery } from '../../components/PostsGallery';
import { AlbumDetailsContainer, AlbumDetailPosts } from './styled';

export const AlbumDetails = () => {
  const { id } = useParams();
  const { albums, fetchAlbums } = useContext(AlbumsContext)

  useEffect(() => {
    fetchAlbums()
  }, [])

  const album = albums.find(album => album.id === Number(id));
  if (!album) return null;

  const { name, posts } = album;

  return (
    <AlbumDetailsContainer>
      <Title>{ name }</Title>
      <AlbumDetailPosts>
        <PostsGallery posts={posts} />
      </AlbumDetailPosts>
    </AlbumDetailsContainer>
  )
}
