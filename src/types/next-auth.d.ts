import type { User as AppUser, Role } from '@prisma/client';
import 'next-auth/react';

export interface AuthSessionUser {
  email: string | null;
  id: string;
  image: string | null;
  name: string | null;
  role: Role;
  tid: string | null;
}

declare module 'next-auth' {
  interface Session {
    user?: AuthSessionUser;
  }

  interface User extends AppUser {}
}
