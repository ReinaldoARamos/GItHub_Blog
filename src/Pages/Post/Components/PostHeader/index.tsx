
import { NavLink, useParams } from "react-router-dom";
import { Spinner } from "../../../../Componentes/Spinner";
import { PostCardContainer, PostCardContent } from "./styles";
import { ExternalLinks } from "../../../../Componentes/ExternalLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faCalendar, faComment } from "@fortawesome/free-solid-svg-icons";
import { RegularText, TitleText } from "../../../../Typography/Typography";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useCallback, useContext, useEffect, useState } from "react";
import { relativeDateFormatter } from "../../../../utils/dateFormatter";
import { api } from "../../../../lib/axios";
import { IPosts } from "../../../../Context/context";


interface PostHeaderPRops{ 
  isLoading: boolean,
  postData: IPosts 
}
export function PostHeader({isLoading, postData} : PostHeaderPRops) {
  const formattedDate = relativeDateFormatter(postData.created_at);
    return( 
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
                    <FontAwesomeIcon icon={faCalendar} /> {formattedDate}
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
    )
}