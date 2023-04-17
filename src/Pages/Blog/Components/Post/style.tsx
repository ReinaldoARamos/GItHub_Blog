import styled from "styled-components";


export const PostContainer = styled.div`
 width: 100%;
  height: 16.25rem;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors["base-post"]};
  border: 2px solid ${({ theme }) => theme.colors["base-post"]};
  padding: 2rem;
  transition: 0.4s;
  margin-left: 293px;
  display: flex;
  flex-direction: column;
  
  h1{
   
    width: 283px;
   
  }
  header{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .Content{
    margin-top: 20px;
  }
`
