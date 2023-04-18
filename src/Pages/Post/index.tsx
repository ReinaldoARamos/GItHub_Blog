import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLinks } from "../../Componentes/ExternalLinks";
import { RegularText, TitleText } from "../../Typography/Typography";
import { PostCardContainer, PostCardContent } from "./style";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup, faCalendar, faComment} from "@fortawesome/free-solid-svg-icons";

export function Post() {
    return (
        <PostCardContainer>
            <PostCardContent>
            <header>
           
            <a href="https://github.com/ReinaldoARamos" target="_blank">
            <ExternalLinks text={"github"} />
      
            </a>
          
            </header>
            <TitleText>JavaScript data types and data structures </TitleText>
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
              <FontAwesomeIcon icon={faCalendar} /> Há 1 dia
            </RegularText>
          </li>
          <li>
            <RegularText size="s">
              {" "}
              <FontAwesomeIcon icon={faComment} /> 5 comentários
            </RegularText>
          </li>
        </ol>
            </PostCardContent>
          
        </PostCardContainer>
    )
}