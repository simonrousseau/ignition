const { ApolloServer } = require('apollo-server');
import merge from 'lodash/merge';

import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql';
import ResolutionsResolvers from '../../api/resolutions/resolvers';

//hi

const testSchema = `
    type Query {
        hi: String
        resolutions: [Resolution]
    }
`;

const typeDefs = [testSchema, ResolutionsSchema];

const testResolvers = {
  Query: {
    hi() {
      return "4..3..2..1...GO !";
    }
  }
};

const resolvers = merge(testResolvers, ResolutionsResolvers);


const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});