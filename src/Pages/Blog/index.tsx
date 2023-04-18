import { Header } from "../../Componentes/Header/Header";
import { Post } from "./Components/Post";
import { PostContainer } from "./Components/Post/style";
import { Profile } from "./Components/Profile";
import { SearchInput } from "./Components/SearchForm";
import { PostsListContainer } from "./style";



export interface Posts {
   title: string;
   body: string;
   created_at: string;
   number: number;
   html_url: string;
   comments: number;
   user: {
     login: string;
   };
 }

export function Blog() {

  
    return ( 
       <>
        
        <Profile/>
        
        <SearchInput />
   
       
        <PostsListContainer>
           <Post />
           <Post />
         
         
        </PostsListContainer>

     </>
    )
}