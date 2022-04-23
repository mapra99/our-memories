import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { useBreakpoint } from '../../hooks/useBreakpoint'
import { replaceParams } from '../../utils/replaceParams';
import { AlbumThumbnailProps } from './types';
import {
  ThumbnailContainer,
  ThumbnailImage,
  ThumbnailHoverContainer,
  ThumbnailTitle,
  ThumbnailDeleteButton } from './styled';
import ROUTES from '../../navigation/routes';

export const AlbumThumbnail = ({album}: AlbumThumbnailProps) => {
  const { currentUser } = useContext(AuthContext);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const { mobile } = useBreakpoint();

  const handleDelete = (event) => {
    event.stopPropagation();
    setDeleteModalVisible(true);
  }

  return (
    <>
      <Link to={replaceParams(ROUTES.ALBUMS.SHOW, {id: album.id})}>
        <ThumbnailContainer>
          <ThumbnailImage src={album.posts[0]?.imageUrl} alt={album.name} />
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
