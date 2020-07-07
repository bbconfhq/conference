/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ReactNode } from 'react';
import { Container, Title } from './style';

interface SectionTitleProps {
  children: ReactNode | ReactNode[];
}

const SectionTitle = (props: SectionTitleProps): JSX.Element => {
  const { children } = props;
  return (
    <Container>
      <Title>{children}</Title>
    </Container>
  );
};

export default SectionTitle;
