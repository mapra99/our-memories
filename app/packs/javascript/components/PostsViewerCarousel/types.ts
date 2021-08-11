import { PostModel } from '../../models';

export interface PostsViewerCarouselProps {
  activePost: PostModel;
  onClose: () => void;
}
