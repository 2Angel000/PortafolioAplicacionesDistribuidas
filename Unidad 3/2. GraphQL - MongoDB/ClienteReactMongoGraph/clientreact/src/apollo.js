// src/apollo.js
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://192.168.228.177:3000/graphql', // Reemplaza con la URL de tu servidor GraphQL
  cache: new InMemoryCache(),
});

export default client;
