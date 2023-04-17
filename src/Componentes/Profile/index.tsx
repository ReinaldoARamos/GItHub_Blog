import { RegularText, TitleText } from "../../Typography/Typography";
import { Avatar } from "../Avatar";
import { ProfileContainer, ProfileContent } from "./styles";

export function Profile() {
  return (
    <ProfileContainer>
      <Avatar />
      <ProfileContent>
        <header>
          <h1>Reinaldo Ramos</h1>
          GITHUB
        </header>
      </ProfileContent>
    </ProfileContainer>
  );
}
