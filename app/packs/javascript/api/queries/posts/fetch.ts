import { gql } from '@apollo/client';

export const FETCH_POSTS = gql`
  query FetchPostsQuery {
    fetchPosts {
      id
      title
      imageUrl
      createdAt
    }
  }
`
