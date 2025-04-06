import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://10.0.2.2:4001/graphql', // Your GraphQL server URL
  }),
  cache: new InMemoryCache(),
});

export default client;
