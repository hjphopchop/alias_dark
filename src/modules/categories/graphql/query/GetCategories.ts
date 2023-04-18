import { gql } from '@apollo/client';

export default gql`
  query GetCategories {
    categories {
      data {
        id
        title
        oficial
        imageId
        description
        questions {
          id
          title
          categoryId
        }
      }
      totalCount
    }
  }
`;
