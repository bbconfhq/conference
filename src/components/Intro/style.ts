import styled from '@emotion/styled';

export const HeroContainer = styled.div`
  line-height: 1.2;
`;

export const Hero = styled.h1`
  padding-top: 1em;

  font-weight: 400;
  font-size: 6rem;
  letter-spacing: -6px;

  background: linear-gradient(to right, #06a1c7, #3b79ff 70%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Caption = styled.span`
  color: #fff;
  font-size: 2.5em;
  line-height: 4;
`;
