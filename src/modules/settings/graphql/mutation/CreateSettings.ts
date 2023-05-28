import { idArg } from 'nexus';
import { gql } from '@apollo/client';

export default gql`
  mutation CreateSettings($userId: String!) {
    createSettings(userId: $userId) {
      id
      roundTime
      pointToWin
      takeAwayPoints
    }
  }
`;
