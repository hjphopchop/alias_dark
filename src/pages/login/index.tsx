import logo from '../../assets/img/logo.png';
import Image from 'next/image';

export const Login = (): React.ReactElement => {
  return (
    <>
      <div className="relative flex h-screen w-full  items-center justify-center bg-[#0d0a0c]">
        <div className="absolute top-5 right-10 rounded-xl bg-zinc-800 px-7 py-1 text-slate-100">
          Войти
        </div>

        <Image
          src={logo}
          alt={'logo'}
          className=""
          width={400}
          height={400}
          loading={'lazy'}
        />
      </div>
    </>
  );
};
