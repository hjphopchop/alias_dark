import { signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  const sesion = useSession();
  const router = useRouter();
  useEffect(() => {
    if (sesion.status !== 'authenticated') {
      void router.push('login');
    }
  }, [router, sesion]);

  console.log(sesion);
  console.log(router);
  return (
    <>
      <div>rrrrr </div>
      <button onClick={() => signOut()}>exit</button>
    </>
  );
}
