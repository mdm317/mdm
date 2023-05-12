import { resolvers } from "@/graphql/server/resolver";
import { typeDefs } from "@/graphql/server/type";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

export default startServerAndCreateNextHandler(server);
