const { ApolloServer } = require('apollo-server');

const typeDefs = `
type Query {
  hi: String
}
`;

const resolvers = {
  Query: {
    hi() {
      return "3..2..1...GO !";
    }
  }
};


const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});