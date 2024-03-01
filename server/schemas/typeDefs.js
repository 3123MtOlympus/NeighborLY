const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    unitNumber: String
    password: String
    phoneNumber: String
    notifiedAt: String
    tools: [Tool]!

  }

  type Tool {
    _id: ID
    name: String
    owner: String
    description: String
    isAvailable: Boolean 
    imgUrl: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    datePosted: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    tools: [Tool]
    tool(toolId: ID!): Tool
    unitNumber: [User]
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!, phoneNumber: String, unitNumber: String): Auth
    login(email: String!, password: String!): Auth
    updateUser(phoneNumber: String!, email: String!, password: String!): Auth
    addTool(name: String, description: String, isAvailable: boolean, owner: String, imgUrl: String): Tool
    addComment(toolId: ID!, commentText: String!): Tool
    removeTool(toolId: ID!): Tool
    removeComment(toolId: ID!, commentId: ID!): Tool
  notifyUser( unitNumber: String!)
    
  }
`;

module.exports = typeDefs;
