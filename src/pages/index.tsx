import { HOME } from '@/common/routes';

import { getLayout } from '@/layout/components/DefaultLayout/DefaultLayout';
import { signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Home = () => {
  console.log('я отрисовался))');
  return (
    <>
      <div>4443333</div>
    </>
  );
};
Home.getLayout = getLayout;
Home.auth = HOME.auth;

export default Home;
