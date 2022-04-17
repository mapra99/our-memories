import { PostModel } from "../../models";

export interface PostDeleteModalProps {
  post: PostModel;
  onClose: () => void;
}
