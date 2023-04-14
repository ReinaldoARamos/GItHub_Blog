import { RegularText, TitleText } from "../../Typography/Typography";
import { Avatar } from "../Avatar";
import { ProfileContainer, ProfileContent } from "./styles";

export function Profile() {
    return (
        <ProfileContainer>
           <Avatar />  
          <ProfileContent>
       
              
      <TitleText color="title" size="l">Reinaldo Aparecido Ramos</TitleText>
      <RegularText color="text" size="m">Desenvolvedor web front end atualmente estudando para me ornar um desenvolvedor full stack. Apaixonado por tecnologia e todas as suas novidades </RegularText>
          </ProfileContent>
            
        </ProfileContainer>
      
    )
}