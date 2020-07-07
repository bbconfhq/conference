/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { AppProps } from 'next/app';
import { Wrapper } from '../components/styles';
import Layout from '../components/Layout';
import './style.css';

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
