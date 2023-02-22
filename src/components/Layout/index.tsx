import React, { type PropsWithChildren } from 'react';
import Helmet from 'react-helmet';
import { globalStyles } from '../../stitches.config';
import {Container} from './styles';
import Header from '../Header';

const Index = ({ children }: PropsWithChildren) => {
  globalStyles();

  return (
    <Container>
      <Helmet>
        <title>BBConf</title>
        <meta name="description" content="백준푸는방 컨퍼런스" />
        <meta property="og:url" content="https://bbconf.kr/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="BBConf" />
        <meta property="og:description" content="백준푸는방 컨퍼런스" />
        <meta property="og:image" content="/thumbnail.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest"></link>
        <link rel="shortcut icon" href="/favicon/favicon.ico" type="image/x-icon"></link>
      </Helmet>
      <Header />
      { children }
    </Container>
  );
}

export default Index;