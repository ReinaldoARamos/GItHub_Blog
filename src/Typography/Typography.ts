import styled  from "styled-components";

interface TitleTextProps{
    color?: 'title' | 'subtitle' | 'text'
    size? : 'l' |  'm' | 's';
    
}

interface RegularTextProps{
    color?: 'title' | 'subtitle' | 'text'
    size? : 'l' |  'm' | 's';
}


export const TitleText = styled.h1<TitleTextProps>`
    color: ${({theme, color}) => theme.colors[`base-${color ?? "title"}`]}

` 