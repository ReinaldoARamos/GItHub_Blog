//import { RegularText, TitleText } from "../../../Typography/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLinks } from "../../../../Componentes/ExternalLinks";
import { RegularText } from "../../../../Typography/Typography";
import { ProfileContainer, ProfileContent } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import ProfilePic from '../../../../assets/profileIcon.jfif'
import { NavLink } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../../../lib/axios";

//const username = import.meta.env.VITE_GITHUB_USERNAME;


interface User {
  login: String,
    followers: String,
    company: String,
    bio: String,
    avatar_url: string
} 
export function Profile() {

  const [profileData, setProfileData] = useState<User>({} as User)

  const getProfileData = useCallback(async () => {
    const response =  await api.get('users/ReinaldoARamos')

    setProfileData(response.data)

 
  }, [profileData])

  useEffect(() =>{
    getProfileData();
  }, [])

  return (
    <ProfileContainer>
      <img src={profileData.avatar_url} />
      <ProfileContent>
        <header>
          <h1>{profileData.login}</h1>
         
            <NavLink  to={"https://github.com/ReinaldoARamos/GItHub_Blog"}>
            <ExternalLinks text={"github"} />
            </NavLink>
            
      
      
        </header>
        <RegularText color="text" size="m">
        {profileData.bio}
        </RegularText>

        <ol>
          <li>
            <RegularText size="s">
              {" "}
              <FontAwesomeIcon icon={faGithub} /> {profileData.login}
            </RegularText>
          </li>
          <li>
            <RegularText size="s">
              {" "}
              <FontAwesomeIcon icon={faBuilding} /> {profileData.company}
            </RegularText>
          </li>
          <li>
            <RegularText size="s">
              {" "}
              <FontAwesomeIcon icon={faUserGroup} /> {profileData.followers} followers
            </RegularText>
          </li>
        </ol>
      </ProfileContent>
    </ProfileContainer>

    
  );
}
