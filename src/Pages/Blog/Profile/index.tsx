//import { RegularText, TitleText } from "../../../Typography/Typography";
import { Avatar } from "../../../Componentes/Avatar";
import { ExternalLinks } from "../../../Componentes/ExternalLinks";
import { ProfileContainer, ProfileContent } from "./styles";

export function Profile() {
  return (
    <ProfileContainer>
      <Avatar />
      <ProfileContent>
        <header>
          <h1>Reinaldo Ramos</h1>
          <a href="https://github.com/ReinaldoARamos" target="_blank">
            <ExternalLinks text={"github"} />
          </a>
        </header>
      </ProfileContent>
    </ProfileContainer>
  );
}
