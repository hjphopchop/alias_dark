import { gql } from '@apollo/client';

export default gql`
  query GetSettings($userId: String!) {
    settings(id: $userId) {
      id
      roundTime
      pointToWin
      takeAwayPoints
    }
  }
`;
