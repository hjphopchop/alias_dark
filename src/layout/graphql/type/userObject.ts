import { objectType } from 'nexus';
import { User } from 'nexus-prisma';

export default objectType({
  definition(t) {
    t.field(User.id);
    t.field(User.name);
    t.field(User.email);
  },
  description: User.$description,
  name: User.$name,
});
