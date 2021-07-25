import { useState, FormEvent } from 'react';
import { DirectUpload } from '@rails/activestorage';
import { IBlob, DirectUploadTypes } from './types';

export const useDirectUpload = (): DirectUploadTypes => {
  const [errors, setErrors] = useState<Error | null>(null);
  const [blob, setBlob] = useState<IBlob | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [fileSrc, setFileSrc] = useState<string | null>(null);

  const { REACT_APP_DIRECT_UPLOADS_URL } = process.env;

  const uploadFile = async (file: File) => {
    setLoading(true);
    try {
      const upload = await new DirectUpload(file, REACT_APP_DIRECT_UPLOADS_URL || '');

      await upload.create((error, blob) => {
        if (error) setErrors(error);
        else setBlob(blob);

        setLoading(false);
      });

      return ({ blob, errors });
    } catch (error) {
      setErrors(error);
      setLoading(false);
    }
  };

  const readFileAsUrl = (file: File) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      if (!event.target) return;
      setFileSrc(`${event.target.result}`)
    };

    reader.readAsDataURL(file);
  };

  const onFileSelect = async (event: FormEvent<HTMLInputElement>) => {
    const { files } = event.currentTarget;
    if (!files || !files.length) return;

    await uploadFile(files[0]);
    readFileAsUrl(files[0]);
  };

  return {
    loading,
    errors,
    blob,
    fileSrc,
    onFileSelect,
  };
};
