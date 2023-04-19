import { useCallback, useContext, useEffect, useState } from "react";
import { Header } from "../../Componentes/Header/Header";
import { Post } from "./Components/Post";
import { PostContainer } from "./Components/Post/style";
import { Profile } from "./Components/Profile";
import { SearchInput } from "./Components/SearchForm";
import { PostsListContainer } from "./style";
import { api } from "../../lib/axios";
import { UseBlog } from "../../hooks/hooks";
import { BlogContext } from "../../Context/context";



export function Blog() {

  const {posts} = useContext(BlogContext)

    return ( 
       <>
        
        <Profile/>
        
        <SearchInput  />
   
       
        <PostsListContainer>
          
       {posts.map((post) => (
        <Post posts={post} key={post.number} />
       ))}
         
        </PostsListContainer>

     </>
    )
}