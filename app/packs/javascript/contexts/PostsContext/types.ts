import { PostModel } from '../../models';
import { IBlob } from '../../hooks/useDirectUpload/types';

export interface NewPostData {
  title: string;
  blob: IBlob;
}

export interface IPostsContext {
  posts: PostModel[]
  createPost: (postData: NewPostData) => Promise<PostModel>
  fetchPageOnCallback: () => Promise<PostModel[]>
  loadingPostsFetch: boolean,
  endPostsFetch: boolean
}
