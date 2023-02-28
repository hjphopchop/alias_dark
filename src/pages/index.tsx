import { HOME } from '@/common/routes';
import { signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Home = () => {
  return (
    <>
      <div className="h-screen w-full bg-black text-white">
        <div>rrrrr </div>
        <button onClick={() => signOut({ redirect: false })}>exit</button>
      </div>
    </>
  );
};

Home.auth = HOME.auth;

export default Home;
