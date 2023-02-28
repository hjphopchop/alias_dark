export type Url = string;

export interface Route {
  auth: boolean;
  name?: string;
  path: Url;
}

export const GRAPHQL_V1_API: Route = {
  auth: false,
  name: 'GraphQL API',
  path: '/api/v1/graphql',
};

export const LOGIN: Route = {
  auth: false,
  name: 'Login',
  path: '/login',
};

export const HOME: Route = {
  auth: true,
  name: 'Home',
  path: '/',
};
