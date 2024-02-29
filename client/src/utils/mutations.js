import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_TOOLS = gql`
  mutation addTool($toolText: String!) {
    addThought(toolText: $toolText) {
      _id
      toolText
      toolAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($toolId: ID!, $commentText: String!) {
    addComment(toolId: $toolId, commentText: $commentText) {
      _id
      toolText
      toolAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;
