import { HeaderContainer } from "./Styles";
import cover from '../../../public/Cover.svg';

export function Header() {
    
    return(
        <HeaderContainer>
            <img src={cover} />
        </HeaderContainer>
    )

}