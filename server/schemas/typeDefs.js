const typeDefs = `
  type User {
    _id: ID
    username: String
    password: String
    messages: [Message]!
  }

  type Message {
    _id: ID
    message: String
    email: String
    name: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    messages(username: String): [Message]
    message(messageId: ID!): Message
    me: User
  }

  type Mutation {
    addUser(username: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    addMessage(userId: ID! ,message: String!, email: String!, name: String!): User
    removeMessage(userId: ID! , messageId: ID!): User
  
  }
`;

module.exports = typeDefs;
