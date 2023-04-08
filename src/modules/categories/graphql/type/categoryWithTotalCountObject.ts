import { objectType } from 'nexus';
import { Category } from 'nexus-prisma';

export default objectType({
  name: 'categoriesWithTotalCount',
  definition(t) {
    t.int('totalCount');
    t.list.field('data', { type: Category.$name });
  },
});
