import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = `
type Query {
    hi: String
}
`;

const resolvers = {
    Query: {
        hi() {
            return "Hello";
        }
    }
};

const schema = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers : resolvers
})

createApolloServer({ schema });