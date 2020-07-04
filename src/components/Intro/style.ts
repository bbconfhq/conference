import { css } from '@emotion/core';

export const Container = css`
  max-width: 1100px;
  margin: 0 auto;
`;

export const HeroContainer = css`
  line-height: 1.2;
`;

export const Hero = css`
  background: linear-gradient(to right, #06a1c7, #3b79ff 70%);
  font-size: 6rem;
  font-weight: 400;
  letter-spacing: -6px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  padding-top: 1em;
`;

export const Caption = css`
  font-size: 2.5em;
  line-height: 4;
  color: #fff;
`;
