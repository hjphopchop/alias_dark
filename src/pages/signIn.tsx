import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const SignIn = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (!(status === 'loading') && !session) void signIn('google');
    if (session) {
      window.close();
    }
  }, [session, status, router]);
  return <div className="absolute left-0 top-0 h-full w-full"></div>;
};

export default SignIn;
