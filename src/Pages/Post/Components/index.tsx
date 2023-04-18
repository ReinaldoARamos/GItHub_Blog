import { ExternalLinks } from "../../../Componentes/ExternalLinks";
import { RegularText, TitleText } from "../../../Typography/Typography";
import { PostCardContainer } from "./style";

export function PostHeader() {
 return(
    <PostCardContainer>
            <header>
           
           <a href="https://github.com/ReinaldoARamos" target="_blank">
           <ExternalLinks text={"github"} />
     
           </a>
         
           </header>
           <TitleText>JavaScript data types and data structures </TitleText>
           <RegularText>diahul</RegularText>
    </PostCardContainer>
 )   
}