import { objectType } from 'nexus';
import { Category } from 'nexus-prisma';

export default objectType({
  definition(t) {
    t.field(Category.id);
    t.field(Category.title);
    t.nullable.field(Category.image);
    t.field(Category.questions);
    t.field(Category.oficial);
  },
  name: Category.$name,
  description: Category.$description,
});
