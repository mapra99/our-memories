import React, { useState, useContext, FormEvent } from 'react';
import { Modal } from '../Modal';
import { Title } from '../Title';
import { InputField } from '../InputField';
import { InputGroup } from '../InputGroup';
import { InputLabel } from '../InputLabel';
import { CancelButton } from '../CancelButton';
import { ActionButton } from '../ActionButton';
import { DropFileInput } from '../DropFileInput';
import { ModalActionButtons } from '../ModalActionButtons';
import { NewPhotoModalProps } from './types';
import { IBlob } from '../../hooks/useDirectUpload/types';
import { PostsContext, IPostsContext } from '../../contexts/PostsContext';

export const NewPhotoModal = ({ albumId, onClose, onSuccess, onErrors }: NewPhotoModalProps) => {
  const [title, setTitle] = useState<string>("");
  const [blob, setBlob] = useState<IBlob | null>(null);
  const { createPost } = useContext(PostsContext) as IPostsContext;

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    // TODO: Validate form fields here
    if (!title || !blob) return;
    try {
      await createPost({ title, blob, albumId })
      onSuccess();
    } catch(err) {
      onErrors()
    }
    onClose();
  }

  return (
    <Modal onClose={onClose}>
      <Title>
        Add a new photo
      </Title>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <InputGroup>
          <InputLabel>
            Name
          </InputLabel>
          <InputField
            type="text"
            name="post[title]"
            placeholder="Suspendisse elit massa"
            value={title}
            onChange={event => setTitle(event.target.value)} />
        </InputGroup>

        <InputGroup>
          <InputLabel>
            File
          </InputLabel>
          <DropFileInput onBlobUpload={(blob: IBlob) => { setBlob(blob) }} />
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
