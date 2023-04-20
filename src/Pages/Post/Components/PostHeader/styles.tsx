import styled from "styled-components";


export const PostCardContainer = styled.div`
  width: 100%;
  height: 13.25rem;
  display: flex;
  margin-top: 1000px;
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  margin-top: -5.5rem;
  width: 54rem;
  background: ${({ theme }) => theme.colors["base-profile"]};
 margin-left: 288px;
`;

export const PostCardContent = styled.div`
 flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-left: 32px;

  a{
    text-decoration: none;
  }

  
  ol {
    width: 393px;
    list-style-type: none;
    display: flex;
    margin-top: 24px;
    gap: 8px;

    justify-content: space-between;

    svg {
      text-align: center;

      width: 1.125rem;
      height: 1.125rem;
      color: ${({ theme }) => theme.colors["base-label"]};
    }
  }

  header{ 
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 40px;
    padding-bottom: 20px
  }
`

