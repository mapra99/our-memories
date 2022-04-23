import { PostModel } from '../../models/PostModel'

export interface PostThumbnailProps {
  posts: PostModel[];
  activePostIndex: number;
  onCarouselSwap?: (e: any, newIndex: number, prevIndex: number, destIndex: number) => void
}
