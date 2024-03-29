import { UserModel } from './UserModel'

export type PostModel = {
  id?: string
  title?: string
  imageUrl?: string
  createdAt?: string
  updatedAt?: string
  user?: UserModel
}
