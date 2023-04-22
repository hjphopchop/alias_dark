import { isAuthenticated } from '@/common/utils/isAuthenticated';
import { arg, extendType, list, nonNull } from 'nexus';
import categoryInput from './categoryInput';
import categoryObject from './categoryObject';
import questionInput from './questionInput';

export default extendType({
  definition(t) {
    t.field('createCategory', {
      args: {
        categoryData: nonNull(categoryInput),
        questionData: arg({
          type: list(nonNull(questionInput)),
        }),
      },
      type: categoryObject,
      authorize: (_, __, ctx) => isAuthenticated(ctx.user),
      resolve: async (_, args, ctx) => {
        const newCategory = await ctx.prisma.category.create({
          data: args.categoryData,
        });
        const updatedCategory = await ctx.prisma.category.update({
          data: {
            questions: {
              createMany: {
                data: args.questionData!,
                skipDuplicates: true,
              },
            },
          },
          where: {
            id: newCategory.id,
          },
        });
        return updatedCategory;
      },
    });
  },
  type: 'Mutation',
});
