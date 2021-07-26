import {IBlob} from '../../hooks/useDirectUpload/types';

export interface DropFileInputProps {
  onBlobUpload: (blob: IBlob) => void;
}
