import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 72px auto;
  grid-template-areas:
    "he he he"
    "na fe em";

  height: 100%;
  max-width: 100vw;
`;

export const Posts = styled.div`
  grid-area: fe;
  margin: 20px;

  border-radius: 4px;
`;

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 7px 0;

  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;

export const PostTitle = styled.h4`
  margin: 0 7px;

  color: ${({ theme }) => theme.colors.text};
  font-size: 2rem;
  font-weight: normal;
`;

export const PostDescription = styled.p`
  margin: 0 7px;

  color: ${({ theme }) => theme.colors.textSecundary};
  font-size: 1.6rem;
`;

export const PostAuthor = styled.span`
  margin: 0 7px;
  margin-bottom: 7px;

  color: ${({ theme }) => theme.colors.text};
  font-size: 1.8rem;
`;

export const PostImage = styled.img`
  width: 100%;

  border-top: solid 1px #f5f5f5;
  border-bottom: solid 1px rgba(0, 0, 0, 0.01);
`;

export const FeedNavagation = styled.ul`
  grid-area: na;
  margin-right: 30px;

  /* background-color: ${({ theme }) => theme.colors.background}; */
  /* box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25); */
  background: none;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 16px;
    margin-right: 5px;
  }

  &:hover {
    ::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.15);
    }

    ::-webkit-scrollbar-thumb:hover {
      background-color: rgba(0, 0, 0, 0.25);
    }
  }
`;
