import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  grid-area: ${({ area }: { area?: string }) => area};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 64px;

  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  z-index: 10;
`;

export const Logo = styled.img`
  height: 32px;
`;

export const Nav = styled.ul`
  display: flex;
  align-items: center;

  list-style: none;
`;

export const NavItem = styled.li`
  margin: 0 5px;
  position: relative;

  & > a {
    padding: 14px;

    color: ${({ theme }) => theme.colors.textSecundary};
    font-size: 1.8rem;
    font-family: 'Poppins', sans-serif;
    text-decoration: none;

    border-radius: 4px;
    transition: 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors.text};
      background-color: rgba(0, 0, 0, 0.08);
    }
  }

  /* &.active {
    & > a::before {
      content: '';
      width: 100%;
      height: 7px;
      border-radius: 4px;
      position: absolute;
      background-color: ${({ theme }) => theme.colors.primary};
      bottom: -18px;
      left: 0;
    }
  } */
`;

export const User = styled.div`
  display: flex;
  align-items: center;
`;

export const UserName = styled.span`
  margin-right: 5px;

  font-size: 22px;
`;

export const UserPhoto = styled.img`
  height: 44px;
  width: 44px;
`;
