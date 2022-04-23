import React from 'react';
import { useState } from 'react';
import { ActionButton } from '../ActionButton';
import { NewAlbumModal } from '../NewAlbumModal';
import { SuccessModal } from '../SuccessModal';
import { ErrorModal } from '../ErrorModal';

export const NewAlbum = () => {
  const [formModalVisible, setFormModalVisible] = useState(false);
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [errorsModalVisible, setErrorsModalVisible] = useState(false);

  return (
    <>
      <ActionButton onClick={() => setFormModalVisible(true)}>
        Create Album
      </ActionButton>

      { formModalVisible && (
        <NewAlbumModal
          onClose={() => setFormModalVisible(false)}
          onSuccess={() => setSuccessModalVisible(true)}
          onErrors={() => setErrorsModalVisible(true)} />
      )}
      { successModalVisible && (
        <SuccessModal
          message="Your album has been created"
          onClose={() => setSuccessModalVisible(false)} />
      )}
      { errorsModalVisible && (
        <ErrorModal
          onClose={() => setErrorsModalVisible(false)} />
      )}
    </>
  )
}
