/** @jsx jsx */
import { Global, jsx } from '@emotion/react';
import React from 'react';
import Head from 'next/head';

import { Reset } from './styles';

interface LayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <>
      <Global styles={Reset} />
      <Head>
        <title>BBConf 2020 Winter</title>
        <meta name='viewport' content='width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover' />
        <script async src='https://www.googletagmanager.com/gtag/js?id=G-YQPEJXK3F0' />
        <script dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-YQPEJXK3F0');
        `,
        }}
        />
      </Head>
      {children}
    </>
  );
};

export default Layout;
