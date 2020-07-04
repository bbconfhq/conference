/** @jsx jsx */
import { jsx } from '@emotion/core';

import { Button } from '../styles';
import { Wrapper, HeroContainer, Hero, Caption } from './style';

const Intro = (): JSX.Element => {
  return (
    <Wrapper>
      <HeroContainer>
        <Hero>Baekjoon-Best Summer Conference 2020</Hero>
        <Caption>July 18th, Seoul</Caption>
      </HeroContainer>
      <Button href="https://open.kakao.com/o/gDzaohI">Join Community</Button>
    </Wrapper>
  );
};

export default Intro;
