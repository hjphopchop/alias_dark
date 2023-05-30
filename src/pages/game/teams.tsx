import { TEAMS } from '@/common/routes';
import { getLayout } from '@/layout/components/DefaultLayout/DefaultLayout';
import { Teams } from '@/modules/game/components/Teams';

const TeamsPage = () => <Teams />;

TeamsPage.auth = TEAMS.auth;

TeamsPage.getLayout = getLayout;
export default TeamsPage;
