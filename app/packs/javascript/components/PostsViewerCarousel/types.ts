import { PostModel } from '../../models';

export interface PostsViewerCarouselProps {
  posts: PostModel[];
  activePostIndex: number;
  onClose?: () => void;
  onDelete?: (event: any) => void;
  onCarouselSwap?: (e: any, newIndex: number, prevIndex: number, destIndex: number) => void
}
