import { HeaderContainer } from "./Styles";
import cover from '../../../public/Cover.svg';
import { TitleText } from "../../Typography/Typography";

export function Header() {
    
    return(
        <HeaderContainer>
            <img src={cover} />

            <TitleText color="text"  size="l" >Teste</TitleText>
        </HeaderContainer>
      
      
    )

}