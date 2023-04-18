//import { RegularText, TitleText } from "../../../Typography/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar } from "../../../../Componentes/Avatar";
import { ExternalLinks } from "../../../../Componentes/ExternalLinks";
import { RegularText } from "../../../../Typography/Typography";
import { ProfileContainer, ProfileContent } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import ProfilePic from '../../../../assets/profileIcon.jfif'

export function Profile() {
  return (
    <ProfileContainer>
      <img src={ProfilePic} />
      <ProfileContent>
        <header>
          <h1>Reinaldo Ramos</h1>
          <a href="https://github.com/ReinaldoARamos" target="_blank">
            <ExternalLinks text={"github"} />
          </a>
        </header>
        <RegularText color="text" size="m">
          I'm studying to become a front-end developer with focus on reac
          I'm always learning and trying to be better day by day
        </RegularText>

        <ol>
          <li>
            <RegularText size="s">
              {" "}
              <FontAwesomeIcon icon={faGithub} /> Reinaldo Ramos
            </RegularText>
          </li>
          <li>
            <RegularText size="s">
              {" "}
              <FontAwesomeIcon icon={faBuilding} /> Mundial Mix
            </RegularText>
          </li>
          <li>
            <RegularText size="s">
              {" "}
              <FontAwesomeIcon icon={faUserGroup} /> 4 followers
            </RegularText>
          </li>
        </ol>
      </ProfileContent>
    </ProfileContainer>

    
  );
}
