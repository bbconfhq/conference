import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 2em 1em;

  border-bottom: 1px solid #383b4f;

  &:first-of-type {
    border-top: 1px solid #383b4f;
  }
`;

export const Title = styled.h2`
  color: #fff;
  font-weight: 500;
  font-size: 1.5em;
`;

export const Speaker = styled.span`
  color: #cfcfd1;
  font-weight: 300;
`;

export const Category = styled.span`
  display: inline-block;
  padding: 2px 10px;
  border-radius: 2px;

  font-weight: 300;
  font-size: 0.8em;

  background: rgba(0, 0, 0, 0.4);
`;
