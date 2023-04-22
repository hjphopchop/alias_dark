import { objectType } from 'nexus';
import { Category, Question } from 'nexus-prisma';

export default objectType({
  definition(t) {
    t.field(Question.id);
    t.field(Question.title);
    t.field(Question.categoryId);
  },
  name: Question.$name,
  description: Question.$description,
});
