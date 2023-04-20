import { PostContent } from "./Components/PostContent";
import { PostHeader } from "./Components/PostHeader";

export function Post() {
  return (
    <>
      <PostHeader />
      <PostContent content="Teste"/>
    </>
  );
}
