/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { AppProps } from 'next/app';
import Layout from '../components/Layout';
import './style.css';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
