import { RegularText } from "../../Typography/Typography";
import { ProfileContainer, ProfileContent } from "./styles";
import ProfilePic from '../../assets/profileIcon.jfif'
export function Profile() {
    return (
        <ProfileContainer>
          <ProfileContent>
            <img src={ProfilePic} alt="" />
            
          </ProfileContent>
            
        </ProfileContainer>
      
    )
}