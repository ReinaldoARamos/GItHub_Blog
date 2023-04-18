import styled from "styled-components";

export const PostContentContainer = styled.div`
  width: 864px;
  height: 422px;
  margin-left: 288px;
`;

export const PostCard = styled.section`
  width: 800px;

  display: flex;
  flex-direction: column;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 32px;
  padding-right: 32px;

  strong {
    color: ${({ theme }) => theme.colors["base-text"]};
    font-weight: 700;
  }
`;
