import logo from '@/assets/img/logo3.png';
import logo2 from '@/assets/img/The_Scream.svg';
import Image from 'next/image';
import { signIn, useSession } from 'next-auth/react';
import authPopup from '@/common/components/authPopup';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { LOGIN } from '@/common/routes';

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
      <div className="relative flex h-screen w-full  items-center justify-center bg-gradient-to-r from-[#434343]  to-[#000]">
        <button
          onClick={() => authPopup('signIn', 'auth')}
          className="absolute top-5 right-10 rounded-xl bg-zinc-800 px-7 py-1 text-slate-100"
        >
          Войти
        </button>

        <Image
          src={logo}
          alt={'logo'}
          className=" "
          width={500}
          height={500}
          loading={'lazy'}
        />
      </div>
    </>
  );
};

Login.auth = LOGIN.auth;

export default Login;
