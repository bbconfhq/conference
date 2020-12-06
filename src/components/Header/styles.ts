import styled from '@emotion/styled';

export const Container = styled.header`
  position: absolute;
  top: 0;
  z-index: 1;
  
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2rem 4rem;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const Logo = styled.a`
  color: #ffffff;
  font-weight: bold;
  font-size: 2em;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
`;

export const Navigation = styled.nav`
  display: flex;
  flex: 1 0 100%;
  gap: 2rem;
  justify-content: center;
  padding: 1rem;

  font-family: Roboto Mono, -apple-system, BlinkMacSystemFont, sans-serif;
`;

export const NavigationItem = styled.a`
  color: #fff;
  font-size: 1.125em;
  text-decoration: none;
`;

/*
<header class="site-header">
  <div class="wrapper site-header__wrapper">
    <a href="#" class="brand"><img src="logo.svg" alt="brand" /></a>
    <nav class="nav"></nav>
    <a href="/track-shipment" class="button">Track</a>
  </div>
</header>
* */
