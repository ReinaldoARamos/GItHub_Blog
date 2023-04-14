import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 100%;
  height: 13.25rem;
  display: flex;
  align-items: center;


  border-radius: 10px;

  left: 288px;
  top: 208px;
  margin-top: -15rem;
 position: relative;

 width: 54rem;
  background: ${({ theme }) => theme.colors["base-profile"]};
 
`;

export const ProfileContent = styled.div`
width: 100%;
background-color: red;
display: flex;
align-items: center;
justify-content: space-around;
`;
