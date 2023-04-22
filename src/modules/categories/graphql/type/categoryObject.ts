import { objectType } from 'nexus';
import { Category } from 'nexus-prisma';

export default objectType({
  definition(t) {
    t.field(Category.id);
    t.field(Category.title);
    t.field(Category.imageId);
    t.field(Category.description);
    t.field(Category.questions);
    t.field(Category.oficial);
  },
  name: Category.$name,
  description: Category.$description,
});
