import React, { Children } from 'react';
import { styled } from 'styled-components';

export const Header = () => {
  return <HeaderStyled>{Children}</HeaderStyled>;
};

const HeaderStyled = styled.header`
  width: 100%;
`;
