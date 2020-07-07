/** @jsx jsx */
import { jsx } from '@emotion/core';

import { Button } from '../styles';
import { HeroContainer, Hero, Caption } from './style';

const Intro = (): JSX.Element => {
  return (
    <>
      <HeroContainer>
        <Hero>Baekjoon-Best Summer Conference 2020</Hero>
        <Caption>July 18th, Seoul</Caption>
      </HeroContainer>
      <Button href="https://open.kakao.com/o/gDzaohI">Join Community</Button>
    </>
  );
};

export default Intro;
