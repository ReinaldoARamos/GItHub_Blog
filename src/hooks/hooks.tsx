import { useContext } from "react";
import { BlogContext } from "../Context/context";

export function UseBlog() {
    const {posts} = useContext(BlogContext)
}