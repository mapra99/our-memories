import React from 'react';
import { useState } from 'react';
import { ActionButton } from '../ActionButton';
import { NewPhotoModal } from '../NewPhotoModal';
import { SuccessModal } from '../SuccessModal';
import { ErrorModal } from '../ErrorModal';
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
        <SuccessModal
          message="Your photo was uploaded successfully!"
          onClose={() => setSuccessModalVisible(false)} />
      )}
      { errorsModalVisible && (
        <ErrorModal
          onClose={() => setErrorsModalVisible(false)} />
      )}
    </>
  )
}
