import styled from '@emotion/styled';
import { breakpoints, media } from '../../utils/mediaquery';

export const Title = styled.h1`
  padding-top: 4rem;

  color: #ffffff;
  font-size: 6em;
  text-align: center;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
  
  ${media.greaterThan(breakpoints.small)} {
    padding-top: 0;
  }
`;

export const SubTitle = styled.h2`
  display: block;
  width: 100%;
  margin-top: 2em;

  color: #ffffff;
  font-size: 2.25em;
  line-height: 1em;
  text-align: center;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
  
  ${media.lessThan(breakpoints.small)} {

  }
  
  img {
    max-height: 1em;
    
    vertical-align: top;
  }
  
  time {
      letter-spacing: 2px;
      vertical-align: top;
  }
  
  span {
    margin-left: 0.5em;
    
    ${media.lessThan(breakpoints.small)} {
      display: block;
      margin-top: 1rem;
    }
  }
`;

export const Container = styled.div`
  position: relative;
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100vh;

  font-family: Lato, -apple-system, BlinkMacSystemFont, sans-serif;

  background: linear-gradient(100deg, #24A4EA, #379DEB 25%, #B76BF0);

  ${media.greaterThan(breakpoints.small)} {
    align-items: center;
    justify-content: center;
  }
  

`;

export const Svg = styled.svg`

  position: fixed;
  bottom: 0;
  
  width: 100%;
  height: 15vh;
  
  ${media.greaterThan(breakpoints.small)} {
    height: 200px;
  }
  
  use {
    animation: wave 25s cubic-bezier(.55,.5,.45,.5) infinite;
    
    fill : #ffffff;

    &.depth-0 {
      height: 200px;

      opacity: 0.65;

      animation-duration: 16s;
      animation-delay: -2s;
    }
    
    &.depth-1 {
      height: 240px;

      opacity: 0.5;

      animation-duration: 21s;
      animation-delay: -7s;
    }
    
    &.depth-2 {
      height: 220px;

      opacity: 0.33;

      animation-duration: 25s;
      animation-delay: -13s;
    }

    &.depth-3 {
      height: 280px;

      opacity: 0.1;

      animation-duration: 20s;
      animation-delay: -5s;
    }

    @keyframes wave {
      0% {
       transform: translate3d(-90px,0,0);
      }
      100% {
        transform: translate3d(85px,0,0);
      }
    }
  }
`;
