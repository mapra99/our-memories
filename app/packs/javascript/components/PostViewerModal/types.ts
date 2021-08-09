import { PostModel } from '../../models';

export interface PostViewerModalProps {
  post: PostModel;
  onClose: () => void;
}
