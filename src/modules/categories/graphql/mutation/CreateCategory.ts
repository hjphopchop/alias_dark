import { gql } from '@apollo/client';
export default gql`
  mutation CreateCategory(
    $categoryData: categoryInput!
    $questionData: [questionInput!]
  ) {
    createCategory(categoryData: $categoryData, questionData: $questionData) {
      id
      title
      oficial
      imageId
      questions {
        id
        title
        categoryId
      }
    }
  }
`;
