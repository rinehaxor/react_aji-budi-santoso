import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://divine-earwig-44.hasura.app/v1/graphql',
  cache: new InMemoryCache(),
  headers: {
    'x-hasura-admin-secret': 'azc8rairPSjhnZjQse7PmwXyI4kWJMlkOxe3IvbjvTr2UJEjmKOL4aQffyPV6uc0',
  },
});
export default client;
