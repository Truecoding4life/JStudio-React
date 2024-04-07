import { gql } from "@apollo/client";


export const ALL_MESSAGE = gql `
query Query($username: String!) {
    user(username: $username) {
      messages {
        createdAt
        _id
        name
        message
        email
      }
    }
  }

`