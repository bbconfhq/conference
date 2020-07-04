/** @jsx jsx */
import { jsx } from '@emotion/core';
import Head from 'next/head';

import Container from './style';

interface LayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

const Layout = (props: LayoutProps): JSX.Element => {
  const { children } = props;

  return (
    <Container>
      <Head>
        <title>BBConf 2020 Summer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
    </Container>
  );
};

export default Layout;
