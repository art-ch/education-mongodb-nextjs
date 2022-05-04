import { ReactNode } from 'react';
import Head from 'next/head';

import Navbar from './Navbar';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <>
    <Head>
      <title>Note App</title>
    </Head>
    <Navbar />
    {children}
  </>
);

export default Layout;
