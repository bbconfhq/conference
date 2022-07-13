import { styled } from '../../stitches.config';

export const Container = styled('header', {
  marginBottom: '2rem',
  padding: '0 1rem',
});

export const Nav = styled('nav', {
  display: 'flex',
  justifyContent: 'space-between',
  a: {
    color: '#666',
    textTransform: 'lowercase',
  }
});

export const InternalNavContainer = styled('div', {
  display: 'flex',
  gap: '0.5rem',
})