import { styled } from '../../stitches.config';

export const Container = styled('ul', {
  padding: '0 1rem',
});

export const Item = styled('li', {
  width: '100%',
  listStyle: 'none',
  padding: '1rem 0',

  borderBottom: '1px solid #ccc',
});

export const Title = styled('span', {
  display: 'inline-block',
  fontSize: '1rem',
});

export const Speaker = styled('span' ,{
  display: 'block',
  textAlign: 'right',
});

export const Category = styled('span', {
  borderRadius: '4px',
  padding: '0.25rem 0.125rem',
  marginRight: '0.25rem',
  backgroundColor: '#3a3835',
  color: '#f1f1f1',

  fontSize: '0.75rem'
})