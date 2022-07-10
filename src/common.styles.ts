import { styled } from './stitches.config';

export const Title = styled('h1', {
  marginBottom: '1rem',
  fontSize: '2.5rem',
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
  fontSize: '1.25rem'

})

export const Link = styled('a', {
  display: 'block',
  marginTop: '1rem',
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
  fontSize: '1.5rem',
  textAlign: 'center',
})


export const Divider = styled('div', {
  margin: '2rem 0',
  height: '1px',
  backgroundColor: '#aaa',
})

export const AboutText = styled('p', {
    wordBreak: 'keep-all',
    fontSize: '1.25rem',
    letterSpacing: '1px',
    lineHeight: '2rem',
})