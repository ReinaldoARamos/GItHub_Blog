import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 100%;
  height: 13.25rem;
  display: flex;
  margin-top: 1000px;
  border-radius: 10px;

  left: 288px;
  top: 208px;
  margin-top: -15rem;
  position: relative;

  width: 54rem;
  background: ${({ theme }) => theme.colors["base-profile"]};
`;

export const ProfileContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    margin-right: 32px;
    color: ${({ theme }) => theme.colors["base-blue"]};
  }

  h1 {
    font-size: ${({ theme }) => theme.textSizes["title-title-l"]};
    color: ${({ theme }) => theme.colors["base-title"]};
    line-height: 130%;
  }
  a {
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
`;

/*

export const ProfileFooter = styled.div`

max-width: 393px;
height: 26px;
background-color: green;
display: flex;
flex-direction: column;
gap: 24px;
display: flex;
margin-top: 24px;



`

*/
