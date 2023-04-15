import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { createClient } from 'graphql-ws';

const httpLink = new HttpLink({
  uri: 'https://divine-earwig-44.hasura.app/v1/graphql',
  cache: new InMemoryCache(),
  headers: {
    'x-hasura-admin-secret': 'azc8rairPSjhnZjQse7PmwXyI4kWJMlkOxe3IvbjvTr2UJEjmKOL4aQffyPV6uc0',
  },
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: 'wss://divine-earwig-44.hasura.app/v1/graphql',
    connectionParams: {
      reconnect: true,
      headers: {
        'x-hasura-admin-secret': 'azc8rairPSjhnZjQse7PmwXyI4kWJMlkOxe3IvbjvTr2UJEjmKOL4aQffyPV6uc0',
      },
    },
  })
);
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
  },
  wsLink,
  httpLink
);
const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});
export default client;
