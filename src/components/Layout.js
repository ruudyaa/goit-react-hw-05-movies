import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './Container/Container.styled';
import {
  Footer,
  FooterLink,
  Header,
  HeaderNavLink,
  HeaderNavList,
  Main,
} from './Header/Header.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <nav>
            <HeaderNavList>
              <li>
                <HeaderNavLink to="/">Home</HeaderNavLink>
              </li>
              <li>
                <HeaderNavLink to="/movies">Movies</HeaderNavLink>
              </li>
            </HeaderNavList>
          </nav>
        </Container>
      </Header>
      <Main>
        <Container>
          <Suspense>
            <Outlet />
          </Suspense>
        </Container>
      </Main>
      <Footer>
        <Container>
          <p>
            &#169; 2023 | All Rights Reserved | Developed by{' '}
            <FooterLink
              href="https://www.linkedin.com/in/marta-r-aabb35219/"
              target="_blank"
              rel="noreferrer"
            >
              Marta Rudnytska
            </FooterLink>
          </p>
        </Container>
      </Footer>
      <Toaster position="top-rightr" />
    </>
  );
};
