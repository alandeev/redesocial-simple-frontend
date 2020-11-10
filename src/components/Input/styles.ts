/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }

  &.error {
    span.message {
      color: #ff0000;
    }
  }
  
  & > span {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.6rem;

    display: flex;
    align-items: center;
    margin-bottom: 2px;

    & > svg {
      margin-right: 3px;
    }

    &.message {
      color: ${({ theme }) => theme.colors.textSecundary};
      font-size: 1.4rem;
      
      margin-bottom: 0;
    }
  }

  & > input {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.4rem;

    width: 100%;
    padding: 5px;
    margin-bottom: 2px;
    background-color: #fff !important;

    border: solid 1px rgba(0, 0, 0, .25);
    border-radius: 4px;
  }
`;
