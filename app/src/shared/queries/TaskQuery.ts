import { DocumentNode, gql } from '@apollo/client';

export const TASKS: DocumentNode = gql`
  query Tasks {
    tasks {
      authorId
      description
      id
      title
      updatedAt
      author {
        name
      }
    }
  }
`;
