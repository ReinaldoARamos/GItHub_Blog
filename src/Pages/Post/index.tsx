import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLinks } from "../../Componentes/ExternalLinks";
import { RegularText, TitleText } from "../../Typography/Typography";
import { PostCardContainer, PostCardContent } from "./style";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faBuilding,
  faUserGroup,
  faCalendar,
  faComment,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { PostContent } from "./Components/PostContent";

export function Post() {
  return (
    <>
      <PostCardContainer>
        <PostCardContent>
          <header>
            <ExternalLinks
              icon={<FontAwesomeIcon icon={faAngleLeft} />}
              text="Voltar"
              variant="iconLeft"
            >
              {" "}
            </ExternalLinks>
            <a
              href="https://github.com/ReinaldoARamos/GItHub_Blog"
              target="_blank"
            >
              <ExternalLinks text={"ver no github"} />
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
      <PostContent />
    </>
  );
}
