import { PostModel } from '../../models';
import { IBlob } from '../../hooks/useDirectUpload/types';

export interface NewPostData {
  title: string;
  blob: IBlob;
  albumId: number;
}

export interface IPostsContext {
  posts: PostModel[]
  createPost: (postData: NewPostData) => Promise<PostModel>,
  deletePost: (post: PostModel) => void,
  fetchPageOnCallback: () => Promise<PostModel[]>
  loadingPostsFetch: boolean,
  endPostsFetch: boolean
}
