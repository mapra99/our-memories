import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useBreakpoint } from '../../hooks/useBreakpoint'
import { replaceParams } from '../../utils/replaceParams';
import { AlbumThumbnailProps } from './types';
import {
  ThumbnailContainer,
  ThumbnailImage,
  ThumbnailHoverContainer,
  ThumbnailTitle,
  ThumbnailDeleteButton,
  ThumbnailImagesWrapper } from './styled';
import ROUTES from '../../navigation/routes';

export const AlbumThumbnail = ({album}: AlbumThumbnailProps) => {
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const { mobile } = useBreakpoint();

  const handleDelete = (event) => {
    event.stopPropagation();
    setDeleteModalVisible(true);
  }

  const previewPosts = album.posts.slice(0, 3);

  return (
    <>
      <Link to={replaceParams(ROUTES.ALBUMS.SHOW, {id: album.id})}>
        <ThumbnailContainer>
          <ThumbnailImagesWrapper>
            { previewPosts.map(post => (
              <ThumbnailImage key={post.id} src={post.imageUrl} alt={post.title} />
            )) }
          </ThumbnailImagesWrapper>
          { !mobile && (
            <ThumbnailHoverContainer>
              <ThumbnailTitle>
                {album.name}
              </ThumbnailTitle>
              { false && ( // TODO: Enable this when albums delete feature is active
                <ThumbnailDeleteButton onClick={handleDelete}>
                  delete
                </ThumbnailDeleteButton>
              )}
            </ThumbnailHoverContainer>
          )}
        </ThumbnailContainer>
      </Link>

      { deleteModalVisible && (
        <>
        {/* // <PostDeleteModal
        //   post={post}
        //   onClose={() => setDeleteModalVisible(false)}
        // /> */}
        </>
      )}
    </>
  )
}
