import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  gap: 5px;
`;

export const StyledInput = styled.input`
  min-width: 60%;
  margin-bottom: 20px;
  padding: 7px 10px;
  border: ${props => props.theme.input.$border};
  border-radius: ${props => props.theme.input.$borderRadius};

  &:focus {
    outline: transparent;
    border: 1px solid #437aa5;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

export const StyledListItem = styled.li`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: calc((100% - 2 * 15px) / 3);
  }

  @media screen and (min-width: 1400px) {
    width: calc((100% - 3 * 15px) / 4);
  }
`;

export const StyledImage = styled.img`
  margin-bottom: 3px;
  border-radius: ${props => props.theme.$borderRadius};
`;
