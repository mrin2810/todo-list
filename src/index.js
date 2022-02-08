import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const graphQlAppLink = 'https://todo-react-mrin.hasura.app/v1/graphql';
const client = new ApolloClient({
  uri: graphQlAppLink,
  headers: {
    'x-hasura-admin-secret': 'AP3SCN6sFe1pdgWERNi3MvSMaKex7pEZpotw8W7clEHjagh2DFiIRXcpz367W2qo'
  }
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);