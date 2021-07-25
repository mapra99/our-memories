import React, { useState } from 'react';
import { ActionButton } from '../ActionButton';
import { NewPhotoModal } from '../NewPhotoModal';
import { SuccessPhotoModal } from '../SuccessPhotoModal';
import { ErrorPhotoModal } from '../ErrorPhotoModal';

export const NewPhoto = () => {
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
