import { PostModel } from '../../models';

export interface PostViewerProps {
  post: PostModel
  onDelete: (e: any) => void
}
