import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledContainer, StyledMain } from 'styles/GlobalStyle.js';
import { StyledHeader } from './Header/Header';
import { Navigation } from './Navigation/Navigation.jsx';

export const Layout = children => {
  return (
    <>
      <StyledHeader>
        <StyledContainer>
          <Navigation>{children}</Navigation>
        </StyledContainer>
      </StyledHeader>

      <StyledMain>
        <Suspense fallback={<h1>Loading....</h1>}>
          <Outlet />
        </Suspense>
      </StyledMain>
    </>
  );
};
