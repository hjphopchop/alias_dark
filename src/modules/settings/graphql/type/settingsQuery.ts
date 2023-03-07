import { isAuthenticated } from '@/common/utils/isAuthenticated';
import { extendType, nonNull, idArg, stringArg } from 'nexus';
import { Settings } from 'nexus-prisma';

export default extendType({
  definition(t) {
    t.list.field('settings', {
      args: {
        id: nonNull(stringArg()),
      },
      authorize: (_, __, ctx) => isAuthenticated(ctx.user),
      resolve: (_, args, ctx) =>
        ctx.prisma.settings.findMany({
          where: {
            userId: args.id,
          },
        }),
      type: Settings.$name,
    });
  },
  type: 'Query',
});
