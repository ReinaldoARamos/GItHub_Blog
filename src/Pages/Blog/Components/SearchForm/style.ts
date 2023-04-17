import styled from "styled-components";

export const SearchContainer = styled.div`
  margin-top: 72px;
  display: flex;
  width: 864px;
  height: 70px;
  margin-left: 288px;
  color: ${({theme}) => theme.colors["base-span"]};
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    width: 100%;
    display: flex;
    justify-content: space-between;

  }

  input {
    display: flex;
    height: 50px;
    color: ${({theme}) => theme.colors["base-label"]};
    background-color:  ${({theme}) => theme.colors["base-input"]};
    border: ${({theme}) => theme.colors["base-border"]}; 
    border-radius: 8px;
    font-size:  ${({theme}) => theme.textSizes["text-regular-s"]};
    padding: 12px 16px 12px 16px;
    color: ${({theme}) => theme.colors["base-title"]}; ;
    
  }

 
`;
