import React, { type PropsWithChildren } from 'react';

import { globalStyles } from '../../stitches.config';
import {Container} from './styles';
import Header from '../Header';

const Index = ({ children }: PropsWithChildren) => {
  globalStyles();

  return <Container>
    <Header />
    { children }
  </Container>;
}

export default Index;