import { UserModel } from '../../models';

export interface IAuthContext  {
  currentUser: UserModel;
  logout: () => void;
}
