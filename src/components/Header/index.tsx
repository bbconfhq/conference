/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Container, Logo, LogoHighlight, NavigationWrapper, NavigationItem, NavigationAnchor } from './style';

const Header = (): JSX.Element => {
  const router = useRouter();

  const navItems: NavItem[] = [
    {
      href: '/talks',
      text: 'Talks',
    },
    {
      href: '/archive',
      text: 'Archive',
    },
    {
      href: '/about',
      text: 'About',
    },
  ];

  const onClickUnderConstruction = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // eslint-disable-next-line no-alert
    alert('Under Construction');
    e.preventDefault();
  };

  return (
    <Container>
      <div>
        <Link href="/">
          <h1>
            <Logo href="/">
              BB<LogoHighlight>Conf</LogoHighlight>
            </Logo>
          </h1>
        </Link>
      </div>

      <NavigationWrapper>
        <ul>
          {navItems.map(item => (
            <NavigationItem key={item.text} className={router.pathname === item.href ? 'active' : null}>
              <Link href={item.href}>
                <NavigationAnchor href={item.href} onClick={onClickUnderConstruction}>
                  {item.text}
                </NavigationAnchor>
              </Link>
            </NavigationItem>
          ))}
        </ul>
      </NavigationWrapper>
    </Container>
  );
};

export default Header;
