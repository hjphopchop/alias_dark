import { extendType } from 'nexus';
import { User } from 'nexus-prisma';

export default extendType({
  definition(t) {
    t.nullable.list.field('users', {
      resolve: (_, __, ctx) => ctx.prisma.user.findMany(),
      type: User.$name,
    });
  },
  type: 'Query',
});
