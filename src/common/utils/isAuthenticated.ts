import { AuthSessionUser } from '@/types/next-auth';

export const isAuthenticated = (user?: AuthSessionUser | null): boolean => {
  return !!user;
};
