import { css } from '@emotion/core';

export const Header = css`
  display: flex;

  flex-direction: row;
  align-items: center;
  align-content: stretch;

  padding-top: 2em;
`;

export const Logo = css`
  color: #fff;
  font-weight: 500;
`;

export const LogoHighlight = css`
  color: #3b79ff;
  letter-spacing: -1px;
`;

export const NavContainer = css`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
`;

export const NavItem = css`
  display: inline-block;

  &:not(:first-child) {
    padding-left: 2em;
  }
`;

export const NavLink = css`
  color: #fff;
  font-weight: 300;
  text-transform: uppercase;
`;
