import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLID,
  GraphQLString,
} from 'graphql';


const User = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    }
  })
});


const Query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    viewer: {
      type: User,
      resolve() {
        return {
          id: '123',
          name: 'freiksenet'
        }
      }
    }
  })
});

const Schema = new GraphQLSchema({
  query: Query
});

module.exports = Schema;


