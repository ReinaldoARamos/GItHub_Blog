import { Header } from "../../Componentes/Header/Header";
import { Post } from "./Components/Post";
import { PostContainer } from "./Components/Post/style";
import { Profile } from "./Components/Profile";
import { SearchInput } from "./Components/SearchForm";
import { PostsListContainer } from "./style";

export function Blog() {
    return ( 
       <>
        
        <Profile/>
        
        <SearchInput />
   
       
        <PostsListContainer>
           <Post />
           <Post />
           <Post />
           <Post />
           <Post />
           <Post />
         
         
        </PostsListContainer>

     </>
    )
}