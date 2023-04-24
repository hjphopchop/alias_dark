import { gql } from '@apollo/client';

export default gql`
  query GetQuestions($categoriesId: [String!]) {
    questions(categoriesId: $categoriesId) {
      title
    }
  }
`;
