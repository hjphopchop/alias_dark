import { objectType } from 'nexus';
import { Image } from 'nexus-prisma';

export default objectType({
  definition(t) {
    t.field(Image.id);
    t.field(Image.url);
    t.field(Image.categoryId);
  },
  name: Image.$name,
  description: Image.$description,
});
