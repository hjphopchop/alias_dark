import { gql } from '@apollo/client';

export default gql`
  query GetCategories {
    categories {
      data {
        id
        title
        oficial
        image {
          id
          url
          categoryId
        }
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
