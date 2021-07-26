import React, { useEffect } from 'react';
import { LoadingSpinner } from '../LoadingSpinner';
import {
  DropFileInputArea,
  DropFileInputField,
  DropFileInputPlaceholder,
  DropFileInputImage
} from './DropFileInput.styled';

import {DropFileInputProps} from './props';
import { useDirectUpload } from '../../hooks/useDirectUpload';

export const DropFileInput = ({ onBlobUpload }: DropFileInputProps) => {
  const { loading, blob, fileSrc, onFileSelect } = useDirectUpload();

  useEffect(() => {
    if (!onBlobUpload || !blob) return

    onBlobUpload(blob);
  }, [blob, onBlobUpload])

  if (loading) return (
    <DropFileInputArea>
      <LoadingSpinner />
    </DropFileInputArea>
  )

  return (
    <DropFileInputArea>
      <DropFileInputField
        type="file"
        onChange={onFileSelect}
        accept="image/*" />
      { fileSrc ? (
        <DropFileInputImage
          alt=''
          src={fileSrc} />
      ) : (
        <DropFileInputPlaceholder>
          Drag & drop your image here
        </DropFileInputPlaceholder>
      )}
    </DropFileInputArea>
  )
}
