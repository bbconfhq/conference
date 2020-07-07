import styled from '@emotion/styled';

export const Container = styled.div`
  margin-bottom: 1em;
`;

export const Title = styled.h1`
  position: relative;

  margin-top: 1em;
  padding-bottom: 8px;

  color: #fff;
  font-size: 3em;

  &:after {
    position: absolute;
    bottom: 0;
    left: -1em;

    width: 100px;
    height: 2px;

    background: linear-gradient(to right, #06a1c7, #3b79ff 70%);

    content: '';
  }
`;
