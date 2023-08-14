import { styled } from 'styled-components';

export const StyledTitle = styled.h1`
  font-size: 25px;
  margin-bottom: 15px;
  color: ${props => props.theme.colors.$secondaryTextColor};
`;

export const StyledList = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-left: 30px;
`;

export const StyledListItem = styled.li``;
