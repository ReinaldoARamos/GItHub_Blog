import { PostContentContainer } from "./style";

interface PostContentProps {
  content: string
}

export function PostContent({content} : PostContentProps) {
  return (
    <PostContentContainer>
          {content}
    </PostContentContainer>
  );
}
