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

.Teste{
  
  input {
    width: 100%;
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
  button{ 
    width: 9rem;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: 0.4s;
    color: ${({theme}) => theme.colors["base-text"]};
    background: ${({theme}) => theme.colors["base-profile"]};
    border: transparent;
    svg{
      color: ${({theme}) => theme.colors["base-text"]};
    }

    &:hover{
       background: ${({theme}) => theme.colors["gray-900"]};
       cursor: pointer;
    }
  }
  
  display: flex;
  gap: 1rem;
  height: 50px;
 
}
  
`;
