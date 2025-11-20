import { styled } from './stitches.config';

export const Title = styled('h1', {
  marginBottom: '1rem',
  fontSize: '2rem',
  fontWeight: 400,
  textAlign: 'center',

  variants: {
    subTitle: {
      true: {
        fontSize: '1.75rem',
        textAlign: 'left',
      }
    }
  }
});


export const Time = styled('time', {
  display: 'block',
  textAlign: 'center',
  fontSize: '1.25rem'
});

export const Location = styled('span', {
  display: 'block',
  textAlign: 'center',
  fontSize: '1.25rem',
  marginTop: '0.5rem',
});

export const Farewell = styled('span', {
  display: 'block',
  textAlign: 'center',
  fontSize: '1rem',
  marginTop: '1rem',
});

export const ApplicationLabel = styled('span', {
  display: 'block',
  margin: '0.75rem auto',
  textAlign: 'center',
  fontSize: '1rem',
  fontStyle: 'italic',
});

export const Link = styled('a', {
  display: 'block',
  marginTop: '1rem',
  fontSize: '1.25rem',
  textDecoration: 'none',

  variants: {
    textAlign: {
      center: {
        textAlign: 'center',
      }
    }
  }
});

export const SessionTitle = styled('h2', {
  marginTop: '1.5rem',
  fontSize: '1.5rem',
  textAlign: 'center',
});


export const Divider = styled('div', {
  margin: '2rem 0',
  height: '1px',
  backgroundColor: '#aaa',
});

export const Paragraph = styled('p', {
  wordBreak: 'keep-all',
  fontSize: '1.125rem',
  letterSpacing: '1px',
  lineHeight: '1.75rem',
});
