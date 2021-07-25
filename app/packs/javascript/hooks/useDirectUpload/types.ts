import { FormEvent } from 'react';

export interface IBlob {
  signed_id: string;
}

export type DirectUploadTypes = {
  loading: boolean
  errors: Error | null
  blob: IBlob | null
  fileSrc: string | null,
  onFileSelect: (event: FormEvent<HTMLInputElement>) => void,
}
