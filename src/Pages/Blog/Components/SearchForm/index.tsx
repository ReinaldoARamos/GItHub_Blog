import { RegularText, TitleText } from "../../../../Typography/Typography";
import { SearchContainer } from "./style";

export function SearchInput() {
    return (
        <SearchContainer>
           <header>
            <TitleText size="s">
                
                Publicações
                <RegularText size="s" >6 publicações</RegularText>
                </TitleText>
                
           </header>
        <input placeholder="Busque uma publicação" type="text"/>
        </SearchContainer>
    )
}