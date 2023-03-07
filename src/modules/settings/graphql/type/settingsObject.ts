import { objectType } from 'nexus';
import { Settings } from 'nexus-prisma';

export default objectType({
  definition(t) {
    t.field(Settings.id);
    t.field(Settings.roundTime);
    t.field(Settings.pointToWin);
    t.field(Settings.takeAwayPoints);
  },
  description: Settings.$description,
  name: Settings.$name,
});
