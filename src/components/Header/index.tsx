/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import * as styles from './style';

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
    <header css={styles.Header}>
      <div>
        <Link href="/">
          <h1>
            <a href="/" css={styles.Logo}>
              BB<span css={styles.LogoHighlight}>Conf</span>
            </a>
          </h1>
        </Link>
      </div>

      <div css={styles.NavContainer}>
        <ul>
          {navItems.map(item => (
            <li key={item.text} css={styles.NavItem} className={router.pathname === item.href ? 'active' : null}>
              <Link href={item.href}>
                <a href={item.href} onClick={onClickUnderConstruction} css={styles.NavLink}>
                  {item.text}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
