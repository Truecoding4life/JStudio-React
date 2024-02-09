import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation Mutation($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        messages {
          _id
          message
          email
          name
          createdAt
        }
      }
    }
  }
`;





export const ADD_MESSAGE = gql`
mutation AddMessage($userId: ID!, $message: String!, $email: String!, $name: String!) {
  addMessage(userId: $userId, message: $message, email: $email, name: $name) {
    _id
    messages {
      _id
      createdAt
      email
      message
      name
    }
    password
    username
  }
}
`;

export const REMOVE_MESSAGE = gql`
mutation RemoveMessage($userId: ID!, $messageId: ID!) {
  removeMessage(userId: $userId, messageId: $messageId) {
    messages {
      message
    }
  }
}
`;