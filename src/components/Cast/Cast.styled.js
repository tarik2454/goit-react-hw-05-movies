import { styled } from 'styled-components';

export const StyledCastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

export const StyledCastItem = styled.li`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: calc((100% - 2 * 15px) / 3);
  }

  @media screen and (min-width: 1400px) {
    width: calc((100% - 3 * 15px) / 4);
  }
`;

export const StyledCastName = styled.h2`
  font-size: 20px;
`;

export const StyledCastImage = styled.img`
  margin-bottom: 6px;
  border-radius: ${props => props.theme.$borderRadius};
  overflow: hidden;
`;
