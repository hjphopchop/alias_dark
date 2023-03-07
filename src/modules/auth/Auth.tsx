import { LOGIN, Url } from '@/common/routes';
import { isAuthenticated } from '@/common/utils/isAuthenticated';
import { Session } from 'next-auth/core/types';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

export interface AuthProps {
  loginUrl?: Url;
  children: React.ReactNode;
}

export interface AuthChildProps {
  sesion: Session;
}

const Auth = ({ children, loginUrl }: AuthProps): React.ReactElement => {
  const { data: session, status } = useSession();
  const loading = status === 'loading';
  const isAuth = isAuthenticated(session?.user);
  const router = useRouter();
  useEffect(() => {
    if (!loading && !isAuth) {
      void router.push(loginUrl ?? LOGIN.path);
    }
    if (!loading && !isAuth && loginUrl) {
      void router.push(loginUrl);
    }
  }, [isAuth, loading, loginUrl, router]);

  if (loading || !isAuth) {
    return <div className="bg-black"> </div>;
  }
  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child);
        }
        return child;
      })}
    </>
  );
};

Auth.defaultProps = {
  loginUrl: LOGIN.path,
};

export default Auth;
