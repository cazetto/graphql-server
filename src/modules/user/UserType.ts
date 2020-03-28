import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList
} from 'graphql';

const CreditCardType = new GraphQLObjectType({
  name: 'CreditCard',
  fields: {
    name: { type: GraphQLString },
    number: { type: GraphQLString },
    cvv: { type: GraphQLString }
  }
});

export let UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    userName: { type: GraphQLString },
    gender: { type: GraphQLString },
    creditCards: { type: new GraphQLList(CreditCardType) }
  })
});
