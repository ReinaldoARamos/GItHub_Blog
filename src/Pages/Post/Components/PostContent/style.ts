import styled from "styled-components";

export const PostContentContainer = styled.div`
 display: flex;
 flex-direction: column;
 gap: 1rem;
 padding: 2.5rem 2rem;
 margin-bottom: 8rem;

h1, h2, h3, h4{
    color: ${({theme}) => theme.colors["base-blue"]};
}

p{
        font-size: ${({theme}) => theme.textSizes["text-regular-l"]};
        color: ${({theme}) => theme.colors["base-text"]};
}


code {
        font-family: "FiraCode", monospace !important;
        line-height: 160% !important;
        
      }

      pre{ 
        background-color:  ${({theme}) => theme.colors["base-profile"]};
      }


`;




