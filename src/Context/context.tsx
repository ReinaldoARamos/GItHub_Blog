import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";
import { api } from "../lib/axios";

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
}

interface BlogProviderProps {
  children: ReactNode;
}
export const BlogContext = createContext({} as ContextProps);

export function BlogProvider({ children }: BlogProviderProps) {
  const [posts, setPosts] = useState<IPosts[]>([]);

  const getPost = useCallback(
    async (query: string = "") => {
      try {
        const response = await api.get(
          `/search/issues?q=${query}%20repo:${username}/${reponame}`
        );

        setPosts(response.data.items);
        console.log("Teste" + response.data);
      } finally {
        console.log("asdasd");
      }
    },

    [posts]
  );

  useEffect(() => {
    getPost();
  }, []);


  return (
    <BlogContext.Provider
      value={{ posts}}
    >
      {children}
    </BlogContext.Provider>
  );
}
