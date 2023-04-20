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
import { NavLink, useParams } from "react-router-dom";
import { BlogContext, BlogProvider, IPosts } from "../../Context/context";
import { useCallback, useContext, useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { Spinner } from "phosphor-react";

const username = import.meta.env.VITE_GITHUB_USERNAME;
const reponame = import.meta.env.VITE_GITHUB_REPONAME;

export function Post() {
  const [postData, setPostData] = useState<IPosts>({} as IPosts);
  const [isLoading, SetLoading] = useState(true);
  const { id } = useParams();

  const getPostDetails = useCallback(async () => {
    try {
      SetLoading(true);
      const response = await api.get(
        `/repos/${username}/${reponame}/issues/${id}`
      );
      setPostData(response.data);
      console.log(response.data);
    } finally {
      SetLoading(false);
    }
  }, [postData]);

  useEffect(() => {
    getPostDetails;
  }, [postData]);

  useEffect(() => {
    getPostDetails();
  }, []);

  return (
    <PostCardContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <PostCardContent>
            <header>
              <NavLink to={"/"}>
                <ExternalLinks
                  icon={<FontAwesomeIcon icon={faAngleLeft} />}
                  text="Voltar"
                  variant="iconLeft"
                >
                  {" "}
                </ExternalLinks>
              </NavLink>

              <a href={postData.html_url} target="_blank">
                <ExternalLinks text={"ver no github"} />
              </a>
            </header>
            <TitleText> {postData.title} </TitleText>
            <ol>
              <li>
                <RegularText size="s">
                  {" "}
                  <FontAwesomeIcon icon={faGithub} /> {postData.user.login}
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
                  <FontAwesomeIcon icon={faComment} /> {postData.comments}{" "}
                  comentários
                </RegularText>
              </li>
            </ol>
          </PostCardContent>
        </>
      )}
    </PostCardContainer>
  );
}
