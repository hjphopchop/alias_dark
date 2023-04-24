import { isAuthenticated } from '@/common/utils/isAuthenticated';
import { arg, extendType, list, nonNull, stringArg } from 'nexus';
import categoryObject from './categoryObject';
import questionObject from './questionObject';
import { Question } from 'nexus-prisma';

export default extendType({
  definition(t) {
    t.list.field('questions', {
      type: Question.$name,
      args: {
        categoriesId: list(nonNull(stringArg())),
      },
      authorize: (_, __, ctx) => isAuthenticated(ctx.user),
      resolve: async (_, args, ctx) => {
        const categories = await ctx.prisma.question.findMany({
          where: {
            categoryId: {
              in: args.categoriesId!,
            },
          },
        });
        return categories;
      },
    });
  },
  type: 'Query',
});
