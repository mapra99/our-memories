import React, { useState, useContext, FormEvent } from 'react';
import { Modal } from '../Modal';
import { Title } from '../Title';
import { InputField } from '../InputField';
import { InputGroup } from '../InputGroup';
import { InputLabel } from '../InputLabel';
import { CancelButton } from '../CancelButton';
import { ActionButton } from '../ActionButton';
import { ModalActionButtons } from '../ModalActionButtons';
import { NewAlbumModalProps } from './types';
import { AlbumsContext, IAlbumsContext } from '../../contexts/AlbumsContext';

export const NewAlbumModal = ({ onClose, onSuccess, onErrors }: NewAlbumModalProps) => {
  const [name, setName] = useState<string>("");
  const { createAlbum } = useContext(AlbumsContext) as IAlbumsContext;

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!name) return;
    try {
      await createAlbum({ name })
      onSuccess();
    } catch(err) {
      onErrors()
    }
    onClose();
  }

  return (
    <Modal onClose={onClose}>
      <Title>
        Create new album
      </Title>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <InputGroup>
          <InputLabel>
            Name
          </InputLabel>
          <InputField
            type="text"
            placeholder="Suspendisse elit massa"
            value={name}
            onChange={event => setName(event.target.value)} />
        </InputGroup>

        <ModalActionButtons>
          <CancelButton type="button" onClick={onClose} >
            Cancel
          </CancelButton>
          <ActionButton type="submit">
            Submit
          </ActionButton>
        </ModalActionButtons>
      </form>
    </Modal>
  )
}
