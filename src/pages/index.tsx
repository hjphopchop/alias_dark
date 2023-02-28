import { HOME } from '@/common/routes';
import { signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Home = () => {
  return (
    <>
      <div>rrrrr </div>
      <button onClick={() => signOut()}>exit</button>
    </>
  );
};

Home.auth = HOME.auth;

export default Home;
