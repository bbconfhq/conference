import styled from '@emotion/styled';
import Wavify from 'react-wavify';

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

export const Wave = styled(Wavify)`

  position: absolute;  
  top: 100%;
  
  transform: translateY(-100%);
  
  &.depth-1 {
    height: 200px;
    
    transform: translateY(-80%);
    opacity: 0.75;
  }
  
  &.depth-2 {
    height: 240px;
    
    opacity: 0.5;
  }
  
  &.depth-3 {
    height: 220px;
    
    opacity: 0.33;
  }
  
  &.depth-4 {
    left: 0;

    height: 280px;

    opacity: 0.1;
  }
`;
