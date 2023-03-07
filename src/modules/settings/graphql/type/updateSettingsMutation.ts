import { isAuthenticated } from '@/common/utils/isAuthenticated';
import { extendType, nonNull, stringArg } from 'nexus';
import { Settings } from 'nexus-prisma';
import settingsInput from './settingsInput';

export default extendType({
  definition(t) {
    t.field('updateSettings', {
      args: {
        id: nonNull(stringArg()),
        settingsData: nonNull(settingsInput),
      },
      authorize: (_, __, ctx) => isAuthenticated(ctx.user),
      resolve: async (_, args, ctx) => {
        const updatedSettings = await ctx.prisma.settings.update({
          where: {
            userId: args.id,
          },
          data: args.settingsData,
        });
        return updatedSettings;
      },
      type: Settings.$name,
    });
  },
  type: 'Mutation',
});
