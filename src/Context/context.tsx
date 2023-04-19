import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";
import { api } from "../lib/axios";
import { useForm } from "react-hook-form";

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

interface ContextProps {
  posts: IPosts[];
  getPost: (query: string) => Promise<void>;
}

interface BlogProviderProps {
  children: ReactNode;
 
}
export const BlogContext = createContext({} as ContextProps);

export function BlogProvider({ children }: BlogProviderProps) {
  const [posts, setPosts] = useState<IPosts[]>([]);
  const {reset} = useForm()
  const getPost = useCallback(
    async (query: string = "") => {
      try {
        const response = await api.get(
          `/search/issues?q=${query}%20repo:${username}/${reponame}`
        );
   
        setPosts(response.data.items);
        
        console.log(query);
    
      } finally {
       console.log("teste")
       
      }
    },

    [posts]
  );

  useEffect(() => {
    getPost();
   
  }, []);


  

  /*
  const FetchSearch = useCallback(
    async (query : string = "") => {
      try{
        const response = await api.get(`/search/issues?q=${query}%20repo:${username}/${reponame}`, {
          params: {
            q: query
          }
        })

        setPosts(response.data.items);
      } finally{
        console.log("teste")
      }
     
       
    }
  , [])
*/

  return (
    <BlogContext.Provider
      value={{ posts, getPost }}
    >
      {children}
    </BlogContext.Provider>
  );
}
