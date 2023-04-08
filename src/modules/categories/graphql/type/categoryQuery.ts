import { isAuthenticated } from '@/common/utils/isAuthenticated';
import { extendType } from 'nexus';
import categoryObject from './categoryObject';
import categoryWithTotalCountObject from './categoryWithTotalCountObject';

export default extendType({
  definition(t) {
    t.field('categories', {
      type: categoryWithTotalCountObject,
      authorize: (_, __, ctx) => isAuthenticated(ctx.user),
      resolve: async (_, __, ctx) => {
        const categories = await ctx.prisma.category.findMany();
        const totalCount = await ctx.prisma.category.count();
        return {
          data: categories,
          totalCount,
        };
      },
    });
  },
  type: 'Query',
});
