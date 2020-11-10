/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { lighten } from 'polished';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  padding: 3px;

  color: ${({ theme }) => theme.colors.text};
  font-size: 1.6rem;
  font-family: 'Poppins', sans-serif;
  
  border-radius: 2px;
  border: solid 1px;
  border-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  background: none;

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => lighten(1, theme.colors.text)};
  }

  & > svg {
    margin-right: 2px;
  }

  &.disable {
    background-color: #D7D5D5;
    box-shadow: none;
    color: #9E9E9E;
    cursor: not-allowed;
  }

  & > svg {
    margin-right: 3px;
  }
`;
