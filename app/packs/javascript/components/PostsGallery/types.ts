import { PostModel } from '../../models/PostModel'

export interface PostsGalleryProps {
  posts: PostModel[];
  onCarouselSwap?: (e: any, newIndex: number, prevIndex: number, destIndex: number) => void;
}
