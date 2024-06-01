import gql from "graphql-tag";

export const Task = gql`
    type Tas {
        id: ID!
        title: String!
        author: String!
    }

    type Query {
        tasks: [Task]
    }
    
    type Query {
        task(id: ID!): Task
    }

    type Mutation {
        addBook(title: String!, author: String!): Book
    }
`;