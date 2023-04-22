import path from 'path';
import { connectionPlugin, fieldAuthorizePlugin, makeSchema } from 'nexus';
import * as usersTypes from 'src/layout/graphql/type';
import * as settingsTypes from 'src/modules/settings/graphql/type';
import * as categoriesTypes from 'src/modules/categories/graphql/type';
import NexusPrismaScalars from 'nexus-prisma/scalars';

const generatedDir = path.join(process.cwd(), '.generated', 'graphql');

const schema = makeSchema({
  contextType: {
    export: 'AppGqlContext',
    module: path.join(process.cwd(), 'src/graphql/context.ts'),
  },
  outputs: {
    schema: path.join(generatedDir, 'schema.graphql'),
    typegen: path.join(generatedDir, 'nexus-typegen.ts'),
  },
  plugins: [
    fieldAuthorizePlugin(),
    connectionPlugin({
      includeNodesField: true,
    }),
  ],
  types: [NexusPrismaScalars, usersTypes, settingsTypes, categoriesTypes],
});
export default schema;
