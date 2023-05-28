import { isAuthenticated } from '@/common/utils/isAuthenticated';

import { extendType, nonNull, stringArg } from 'nexus';
import { Settings } from 'nexus-prisma';

export default extendType({
  definition(t) {
    t.field('createSettings', {
      args: {
        userId: nonNull(stringArg()),
      },
      authorize: (_, __, ctx) => isAuthenticated(ctx.user),
      resolve: async (_, args, ctx) => {
        const createSettings = await ctx.prisma.settings.create({
          data: {
            userId: args.userId,
          },
        });
        return createSettings;
      },
      type: Settings.$name,
    });
  },
  type: 'Mutation',
});
