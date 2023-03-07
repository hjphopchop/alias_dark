import { inputObjectType } from 'nexus';
import { Settings } from 'nexus-prisma';

export default inputObjectType({
  definition(t) {
    t.field(Settings.roundTime);
    t.field(Settings.pointToWin);
    t.field(Settings.takeAwayPoints);
  },
  name: 'settingsInput',
});
