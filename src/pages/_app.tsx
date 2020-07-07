/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { AppProps } from 'next/app';
import Layout from '../components/Layout';
import './style.css';
import Wrapper from '../components/Wrapper';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Layout>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </Layout>
  );
};

export default App;
