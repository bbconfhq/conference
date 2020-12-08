import styled from '@emotion/styled';

export const Title = styled.h1`
  color: #ffffff;
  font-size: 6em;
  text-align: center;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
`;

export const SubTitle = styled.h2`
  margin-top: 2em;
  
  color: #ffffff;
  font-size: 2.25em;
  line-height: 1em;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
  
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
  }
`;

export const Container = styled.div`
  position: relative;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  min-height: 200px;
  overflow: hidden;
  
  font-family: Lato, -apple-system, BlinkMacSystemFont, sans-serif;

  background: linear-gradient(100deg, #24A4EA, #379DEB 25%, #B76BF0);
`;

export const Svg = styled.svg`

  position: fixed;
  bottom: 0;
  
  width: 100%;
  height: 200px;
  
  use {
    animation: wave 25s cubic-bezier(.55,.5,.45,.5) infinite;
    
    fill : #ffffff;

    &.depth-0 {
      height: 200px;

      opacity: 0.65;

      animation-duration: 7s;
      animation-delay: -2s;
    }
    
    &.depth-1 {
      height: 240px;

      opacity: 0.5;

      animation-duration: 10s;
      animation-delay: -3s;
    }
    
    &.depth-2 {
      height: 220px;

      opacity: 0.33;

      animation-duration: 13s;
      animation-delay: -4s;
    }

    &.depth-3 {
      left: 0;

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
