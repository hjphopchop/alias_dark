import { GetLayoutFn } from '@/pages/_app';
import React from 'react';
import Header from '../Header/Header';

export interface DefaultlayoutProps {
  children: React.ReactNode;
}
const DefaultLayout = ({
  children,
}: DefaultlayoutProps): React.ReactElement => {
  return (
    <div className=" relative grid h-screen grid-cols-[1fr] grid-rows-[150px,1fr] overflow-x-hidden bg-gradient-to-r from-[#1b1a1a]  to-[#1d1c1c] text-white">
      <Header />
      <main className="col-span-1 row-span-1 w-full overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export const getLayout: GetLayoutFn = (page) => (
  <DefaultLayout>{page}</DefaultLayout>
);

export default DefaultLayout;
