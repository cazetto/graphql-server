import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLEnumType
} from 'graphql';

export let CreditCardType = new GraphQLObjectType({
  name: 'CreditCard',
  fields: {
    name: { type: GraphQLString },
    number: { type: GraphQLString },
    cvv: { type: GraphQLString }
  }
});

export let GenderType = new GraphQLEnumType({
  name: 'Gender',
  values: {
    MALE: { value: 0 },
    FEMALE: { value: 1 }
  }
});

export let UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    userName: { type: GraphQLString },
    gender: { type: GraphQLString },
    token: { type: GraphQLString },
    creditCards: { type: new GraphQLList(CreditCardType) }
  })
});
