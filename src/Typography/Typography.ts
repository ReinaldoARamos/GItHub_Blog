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
    color: ${({theme, color}) => theme.colors[`base-${color ?? "title"}`]};
    font-size: ${({theme, size}) => theme.textSizes[`title-title-${size ?? "l"}`]};
    font-family: ${({theme}) => theme.fonts.title};
    line-height: 160%;
    font-weight: bold;
` 

export const Regular = styled.p<RegularTextProps>`
    color: ${({theme, color}) => theme.colors[`base-${color ?? "text"}`]};
    font-size: ${({theme, size}) => theme.textSizes[`text-regular-${size ?? "l"}`]};
    font-family: ${({theme}) => theme.fonts.title};
    line-height: 160%;

` 