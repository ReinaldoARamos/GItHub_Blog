import { RegularText } from "../../../../Typography/Typography";
import { PostCard, PostContentContainer } from "./style";

export function PostContent() {
  return (
    <PostContentContainer>
      <PostCard>
        <RegularText color="text">
        <strong>
             Programming languages all have built-in data structures, but these
          often differ from one language to another</strong>.
           This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn.
        </RegularText>
      </PostCard>
    </PostContentContainer>
  );
}
