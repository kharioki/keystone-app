const { Keystone } = require('@keystonejs/keystone');
const { MongooseAdapter } = require('@keystonejs/adapter-mongoose');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { Text } = require('@keystonejs/fields');

const keystone = new Keystone({
  adapter: new MongooseAdapter({ mongoUri: 'mongodb://localhost/keystone' }),
});

keystone.createList('Todo', {
  fields: {
    name: { type: Text },
  },
});

module.exports = {
  keystone,
  apps: [new GraphQLApp()],
};