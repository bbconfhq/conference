/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import {
  Container, Logo, Navigation, NavigationItem, Wrapper,
} from './styles';
import { MenuItem } from '../../contants/types';

const Header = () => {
// const router = useRouter();

  const menuItems: MenuItem[] = [
    {
      href: '/sessions',
      text: 'Sessions',
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

  const underConstruction = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
    e.preventDefault();
    alert('추후에 공개됩니다!');
  };

  return (
    <Container>
      <Wrapper>
        <Logo>BBConf</Logo>
      </Wrapper>
      <Wrapper>
        <Navigation>
          {menuItems.map((item) => (
            <NavigationItem
              href={item.href}
              onClick={underConstruction}
            >
              {item.text}
            </NavigationItem>
          ))}
        </Navigation>
      </Wrapper>
    </Container>
  );
};
export default Header;
