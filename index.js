const { Keystone } = require('@keystonejs/keystone');
const { MongooseAdapter } = require('@keystonejs/adapter-mongoose');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { Text } = require('@keystonejs/fields');

const TodoSchema = require('./lists/Todo.js');

const keystone = new Keystone({
  adapter: new MongooseAdapter({ mongoUri: 'mongodb://localhost/keystone' }),
});

keystone.createList('Todo', TodoSchema);


module.exports = {
  keystone,
  apps: [new GraphQLApp()],
};