import {ApolloClient, InMemoryCache, HttpLink} from '@apollo/client';
import {onError} from '@apollo/client/link/error';
import {setContext} from '@apollo/client/link/context';

const httpLink = new HttpLink({
  uri: 'https://bananatask-server.herokuapp.com/',
  credentials: 'same-origin',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Custom-Header': true,
  },
});

const authLink = setContext(async (_, {headers}) => {
  return {
    headers: {
      ...headers,
      authorization: null,
    },
  };
});

const errorLink = onError(({graphQLErrors, networkError}) => {
  if (graphQLErrors) {
    graphQLErrors.map(({message, locations, path}) =>
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink, errorLink),
  cache: new InMemoryCache(),
});

export default client;
