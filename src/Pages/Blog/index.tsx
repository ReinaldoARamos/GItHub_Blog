import { useCallback, useEffect, useState } from "react";
import { Header } from "../../Componentes/Header/Header";
import { Post } from "./Components/Post";
import { PostContainer } from "./Components/Post/style";
import { Profile } from "./Components/Profile";
import { SearchInput } from "./Components/SearchForm";
import { PostsListContainer } from "./style";
import { api } from "../../lib/axios";

const username = import.meta.env.VITE_GITHUB_USERNAME;
const reponame = import.meta.env.VITE_GITHUB_REPONAME;
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

  
   const [posts, setPosts] = useState<IPosts[]>([]);

   const getPost =  useCallback(async (query: string = "") => {

    try{
      const response = await api.get(`/search/issues?q=${query}%20repo:${username}/${reponame}`);

      setPosts(response.data.items);
      console.log("Teste" + response.data)
    
    } finally{
      console.log("asdasd")
    }   
      

   } ,

   [posts])
 
   useEffect(() => {
     getPost()
   },[]);

    return ( 
       <>
        
        <Profile/>
        
        <SearchInput />
   
       
        <PostsListContainer>
          
       {posts.map((post) => (
        <Post posts={post} key={post.number} />
       ))}
         
        </PostsListContainer>

     </>
    )
}