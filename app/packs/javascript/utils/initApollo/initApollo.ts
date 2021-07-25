import { ApolloClient, InMemoryCache } from '@apollo/client';

export const initApollo = () => {
  const { REACT_APP_API_GRAPHQL_URL } = process.env;

  const client = new ApolloClient({
    uri: REACT_APP_API_GRAPHQL_URL,
    cache: new InMemoryCache()
  });

  return(client);
}
