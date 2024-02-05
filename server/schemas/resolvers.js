const { User } = require('../models');
const { signToken, AuthenticationError } = require('../ulti/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('messages');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('messages');
    },
    me: async (parent, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('messages');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, password }) => {
      const user = await User.create({ username, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    addMessage: async (parent, { userId, message, name, email }) => {
        return User.findOneAndUpdate(
          { _id: userId },
          {
            $addToSet: {
              messages: { message, name, email },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
     
    },
    removeMessage: async (parent, { userId, messageId }) => {
     
        return User.findOneAndUpdate(
          { _id: userId },
          {
            $pull: {
              messages: {_id: messageId},
            },
          },
          { new: true }
        );
     
    },
  },
};

module.exports = resolvers;
