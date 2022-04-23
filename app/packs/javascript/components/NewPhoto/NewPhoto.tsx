import React from 'react';
import { useState } from 'react';
import { ActionButton } from '../ActionButton';
import { NewPhotoModal } from '../NewPhotoModal';
import { SuccessPhotoModal } from '../SuccessPhotoModal';
import { ErrorPhotoModal } from '../ErrorPhotoModal';
import { NewPhotoProps } from './types';

export const NewPhoto = ({ albumId }: NewPhotoProps) => {
  const [formModalVisible, setFormModalVisible] = useState(false);
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [errorsModalVisible, setErrorsModalVisible] = useState(false);

  return (
    <>
      <ActionButton onClick={() => setFormModalVisible(true)}>
        Add a photo
      </ActionButton>

      { formModalVisible && (
        <NewPhotoModal
          albumId={albumId}
          onClose={() => setFormModalVisible(false)}
          onSuccess={() => setSuccessModalVisible(true)}
          onErrors={() => setErrorsModalVisible(true)} />
      )}
      { successModalVisible && (
        <SuccessPhotoModal
          onClose={() => setSuccessModalVisible(false)} />
      )}
      { errorsModalVisible && (
        <ErrorPhotoModal
          onClose={() => setErrorsModalVisible(false)} />
      )}
    </>
  )
}
