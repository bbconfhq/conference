/** @jsx jsx */
import { jsx } from '@emotion/core';
import Head from 'next/head';

import style from './style';

interface LayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

const Layout = (props: LayoutProps): JSX.Element => {
  const { children } = props;

  return (
    <div css={style}>
      <Head>
        <title>BBConf 2020 Summer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
    </div>
  );
};

export default Layout;
