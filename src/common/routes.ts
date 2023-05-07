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

export const SETTINGS: Route = {
  auth: true,
  name: 'Settings',
  path: '/settings',
};

export const GAME: Route = {
  auth: true,
  name: 'Game',
  path: '/game',
};

export const TEAMS: Route = {
  auth: true,
  name: 'Teams',
  path: '/game/teams',
};

export const RESULTS: Route = {
  auth: true,
  name: 'Results',
  path: '/game/gameResults',
};

export const CATEGORIES: Route = {
  auth: true,
  name: 'Categories',
  path: '/categories',
};
export const CATEGORYSELECTION: Route = {
  auth: true,
  name: 'CategorySelection',
  path: '/game/categorySelection',
};

export const DIRTYADDIMAGES: Route = {
  auth: true,
  name: 'DirtyAddImages',
  path: '/dirtyAddImages',
};
