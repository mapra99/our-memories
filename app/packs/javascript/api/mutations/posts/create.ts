import { gql } from '@apollo/client';

export const CREATE_POST = gql`
  mutation CreatePostMutation($createPostInput: CreateInput!) {
    createPost(input: $createPostInput) {
      title
      imageUrl
    }
  }
`
