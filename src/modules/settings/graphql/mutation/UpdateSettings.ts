import { idArg } from 'nexus';
import { gql } from '@apollo/client';

export default gql`
  mutation UpdateSettings($id: String!, $settingsData: settingsInput!) {
    updateSettings(id: $id, settingsData: $settingsData) {
      id
      roundTime
      pointToWin
      takeAwayPoints
    }
  }
`;
