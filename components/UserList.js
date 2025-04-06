import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {useQuery, gql} from '@apollo/client';

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      email
      age
      address
    }
  }
`;

export default function UserList() {
  const {loading, error, data} = useQuery(GET_USERS);

  if (loading) return <ActivityIndicator />;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View>
      {data.users.map(user => (
        <View
          key={user.id}
          style={{
            width: '90%',
            alignSelf: 'center',
            padding: 10,
            backgroundColor: 'white',
            elevation: 5,
            marginTop: 10,
          }}>
          <Text>Name: {user.name}</Text>
          <Text>Email: {user.email}</Text>
          <Text>Age: {user.age}</Text>
        </View>
      ))}
    </View>
  );
}
