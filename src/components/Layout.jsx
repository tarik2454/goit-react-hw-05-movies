import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledContainer, StyledMain } from 'styles/GlobalStyle.js';
import { StyledHeader } from './Header/Header';
import { Navigation } from './Navigation/Navigation.jsx';
import { ThreeDots } from 'react-loader-spinner';

export const Layout = ({ children }) => {
  return (
    <>
      <StyledHeader>
        <StyledContainer>
          <Navigation>{children}</Navigation>
        </StyledContainer>
      </StyledHeader>

      <StyledMain>
        <Suspense
          fallback={
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#8a8080"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          }
        >
          <Outlet />
        </Suspense>
      </StyledMain>
    </>
  );
};
