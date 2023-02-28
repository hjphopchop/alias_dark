import logo from '@/assets/img/logo.png';
import Image from 'next/image';
import { signIn, useSession } from 'next-auth/react';
import authPopup from '@/common/utils/authPopup';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Login = (): React.ReactElement => {
  const sesion = useSession();
  const router = useRouter();
  console.log(sesion);
  useEffect(() => {
    if (sesion.data) {
      void router.push('/');
    }
  });
  return (
    <>
      <div className="relative flex h-screen w-full  items-center justify-center bg-[#0d0a0c]">
        <button
          onClick={() => authPopup('signIn', 'auth')}
          className="absolute top-5 right-10 rounded-xl bg-zinc-800 px-7 py-1 text-slate-100"
        >
          Войти
        </button>

        <Image
          src={logo}
          alt={'logo'}
          className=""
          width={400}
          height={400}
          loading={'eager'}
        />
      </div>
    </>
  );
};

export default Login;
