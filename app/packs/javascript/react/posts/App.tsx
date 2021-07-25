import React from 'react';
import { MainLayout } from '../../components/MainLayout';

//TODO:

/* import { PostsBody } from './components/PostsBody';
import { ApolloProvider } from '@apollo/client';
import { initApollo } from './utils/initApollo';
import { PostsProvider } from './contexts/PostsContext'; */

const App = () => {
  //const client = initApollo();

  return (
    //<ApolloProvider client={client}>
    //  <PostsProvider>
        <MainLayout>
          <div> Hola que tal </div>
          {/* <PostsBody /> */}
        </MainLayout>
      //</PostsProvider>
    //</ApolloProvider>
  );
}

export default App;