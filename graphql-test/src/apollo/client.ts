import { ApolloClient, InMemoryCache } from "@apollo/client";

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        boxList: {
          keyArgs: false,
          merge(existing, incoming) {
            if (existing == null) {
              return incoming;
            }
            const tokens = [...existing.data, ...incoming.data];
            return {
              ...incoming,
              data: tokens,
            };
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "http://localhost:3000/api/graphql",
  cache,
});

export default client;
