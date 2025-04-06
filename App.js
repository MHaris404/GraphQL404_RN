import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient'; // Import the Apollo Client
import UserList from './components/UserList'; // Example component

export default function App() {
  return (
    <ApolloProvider client={client}>
      <UserList />  
    </ApolloProvider>
  );
}
