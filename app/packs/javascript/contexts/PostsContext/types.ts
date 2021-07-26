import { PostModel } from '../../models';
import { IBlob } from '../../hooks/useDirectUpload/types';

export interface NewPostData {
  title: string;
  blob: IBlob;
}

export interface PaginationParams {
  limit?: number;
  offset?: number;
}

export interface IPostsContext {
  posts: PostModel[]
  createPost: (postData: NewPostData) => Promise<PostModel>
}
