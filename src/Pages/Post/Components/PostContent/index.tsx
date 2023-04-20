import { PostContentContainer } from "./style";
import ReactMarkdown from 'react-markdown';

interface PostContentProps {
  content: string;
}

export function PostContent({  content}: PostContentProps) {
  return (
    <PostContentContainer>
      <ReactMarkdown children={content} ></ReactMarkdown>
    </PostContentContainer>
  );
}
