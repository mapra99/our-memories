import { PostModel, UserModel } from '.'

export interface AlbumModel {
  id?: number;
  name?: string;
  posts?: PostModel[];
  user?: UserModel;
}
