import { inputObjectType } from 'nexus';
import { Question } from 'nexus-prisma';

export default inputObjectType({
  definition(t) {
    t.field(Question.title);
  },
  name: 'questionInput',
});
