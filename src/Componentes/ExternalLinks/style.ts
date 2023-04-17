import styled, { css } from "styled-components"

interface ExternaLinksProps{
    variant?: "iconLeft"
}

export const ExternaLinksContainer = styled.a<ExternaLinksProps>`
border: none;
background: none;
color: ${({theme}) => theme.colors["base-blue"]};
font-size: ${({theme}) => theme.textSizes["text-regular-m"]};
text-transform: uppercase;
display: flex;
align-items: center0;
gap: 0.5rem;
font-weight: 700;
transition: 0.4s;
border-bottom: 1px solid transparent;
height: 19px;
line-height: 19px;


svg{
    width: 0.75rem;
    height: 0.75rem;
}

&:hover{
    border-color: ${({theme}) => theme.colors["base-blue"]};
    cursor: pointer;
}

${({ variant }) =>
    variant === "iconLeft" &&
    css`
      flex-direction: row-reverse;
    `}
    
`