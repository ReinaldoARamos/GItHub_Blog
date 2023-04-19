import { useCallback, useEffect, useState } from "react";
import { Header } from "../../Componentes/Header/Header";
import { Post } from "./Components/Post";
import { PostContainer } from "./Components/Post/style";
import { Profile } from "./Components/Profile";
import { SearchInput } from "./Components/SearchForm";
import { PostsListContainer } from "./style";
import { api } from "../../lib/axios";


// <Post  key={posts.number} posts={posts}/>
export interface IPosts {
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

  
   const [posts, setPosts] = useState<IPosts>([]);

   const getPost =  useCallback(async (query: string = "") => {

      try{
        const response = await api.get('/repos/ReinaldoARamos/GItHub_Blog/issues/1');
        setPosts(response.data);
        console.log("Teste" + response.data)
      }
 
   }, [posts])
 
   useEffect(() => {
     getPost()
   },[]);

    return ( 
       <>
        
        <Profile/>
        
        <SearchInput />
   
       
        <PostsListContainer>
          
         <Post key={posts.number} posts={posts} /> 
         
        </PostsListContainer>

     </>
    )
}