import styled from "styled-components";

export const ProfileContainer = styled.div`
width: 54rem;
height: 13.25rem;
background: ${({theme}) => theme.colors["base-profile"]};
 position: relative;

border-radius: 10px;
display: flex;
left: 288px;
top: 208px;
margin-top: -15rem;

` 

export const ProfileContent = styled.section`
        display: flex;
        align-items: center;


        img{
            width: 148px;
            height: 148px;
            border-radius: 8px;
            margin-left: 40px;
        }
`