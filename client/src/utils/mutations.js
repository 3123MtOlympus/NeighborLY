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
  mutation addUser($username: String!, $email: String!, $password: String!, $phoneNumber: String!, $unitNumber: String!) {
    addUser(username: $username, email: $email, password: $password, phoneNumber: $phoneNumber, unitNumber: $unitNumber) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_TOOL = gql`
mutation addTool($name: String!, $description: String!, $imgUrl: String) {
  addTool(name: $name, description: $description, imgUrl: $imgUrl) {
    _id
    name
    description
    isAvailable
    imgUrl
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

export const SEND_EMAIL = gql`
mutation sendEmail($unitNumber: String!) {
  sendEmail(unitNumber: $unitNumber) {
    token
  }
}
`;
