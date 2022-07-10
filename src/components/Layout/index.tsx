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
        <title>BBConf 2022</title>
        <meta name="description" content="백준푸는방 컨퍼런스" />
        <meta property="og:url" content="https://bbconf.kr/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="BBConf" />
        <meta property="og:description" content="백준푸는방 컨퍼런스" />
      </Helmet>
      <Header />
      { children }
    </Container>
  );
}

export default Index;