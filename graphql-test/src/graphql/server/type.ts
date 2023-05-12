import gql from "graphql-tag";

export const typeDefs = gql`
  type Box {
    id: Int!
    title: String!
    color: String!
  }
  type BoxWithPage {
    data: [Box!]!
    nxt: Int
  }
  type Query {
    hello: String!
    boxList(nxt: Int): BoxWithPage!
  }
  type Mutation {
    changeBoxTitle(id: Int!): Box
    changeBoxTitleStrangeOutput(id: Int!): String!
  }
`;
