import type { User as AppUser, Role } from '@prisma/client';
import 'next-auth/react';

export interface AuthSessionUser {
  email: string | null;
  id: string;
  image: string | null;
  name: string | null;
  tid: string | null;
}

declare module 'next-auth' {
  export interface Session {
    user?: AuthSessionUser;
  }

  interface User extends AppUser {}
}
