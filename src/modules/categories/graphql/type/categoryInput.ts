import { inputObjectType } from 'nexus';
import { Category } from 'nexus-prisma';

export default inputObjectType({
  definition(t) {
    t.field(Category.title);
    t.field(Category.description);
    t.field(Category.oficial);
    t.field(Category.imageId);
  },
  name: 'categoryInput',
});
