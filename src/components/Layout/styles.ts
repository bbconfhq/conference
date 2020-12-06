import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  margin: 0 auto;
`;

export const Reset = css`
  @import url(//fonts.googleapis.com/css2?family=Roboto+Mono:wght@400&display=swap);
  @import url(//fonts.googleapis.com/css2?family=Lato:wght@900&display=swap);
  
  html, body, #__next {
    height: 100%;
    min-height: 100%;
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    max-width: 100%;

    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  }
`;
