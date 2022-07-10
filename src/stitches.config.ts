import { createStitches } from '@stitches/react';

export const { styled, css, getCssText, globalCss } = createStitches({
  prefix: '',
  theme: {
    colors: {
      bg: '#f3f1e6'
    }
  }
});

export const globalStyles = globalCss({
  '@import': 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css',
  '*': {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
    fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;"
  },
  'html': {
    '@media (prefers-color-scheme: dark)': {
      filter: 'invert(1) hue-rotate(180deg)',
    },
  },
  'html, body': {
    backgroundColor: '$bg'
  }
})