import styled from '@emotion/styled';

export const Container = styled.header`
  display: flex;

  flex-direction: row;
  align-content: stretch;
  align-items: center;

  padding-top: 2em;
`;

export const Logo = styled.a`
  color: #fff;
  font-weight: 500;
`;

export const LogoHighlight = styled.span`
  color: #3b79ff;
  letter-spacing: -1px;
`;

export const NavigationWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
`;

export const NavigationItem = styled.li`
  display: inline-block;

  &:not(:first-child) {
    padding-left: 2em;
  }
`;

export const NavigationAnchor = styled.a`
  color: #fff;
  font-weight: 300;
  text-transform: uppercase;
`;
