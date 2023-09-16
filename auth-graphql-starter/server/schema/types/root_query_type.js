const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString: GraphQLID } = graphql;

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    dummyField: {
      type: GraphQLID,
      resolve() {
        return null;
      },
    },
  },
});

module.exports = RootQueryType;
