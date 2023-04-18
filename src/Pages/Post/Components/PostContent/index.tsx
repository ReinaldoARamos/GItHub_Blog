import { RegularText } from "../../../../Typography/Typography";
import { PostCard, PostContentContainer } from "./style";
import code from "../../../../../public/code.png"
export function PostContent() {
  return (
    <PostContentContainer>
      <PostCard>
        <RegularText color="text" size="m">
          <strong>
            Programming languages all have built-in data structures, but these
            often differ from one language to another
          </strong>
          . This article attempts to list the built-in data structures available
          in JavaScript and what properties they have. These can be used to
          build other data structures. Wherever possible, comparisons with other
          languages are drawn.
        </RegularText>

        <div>
          <h3> Dynamic Typing </h3>
          <RegularText size="m" color="text">
            {" "}
            JavaScript is a loosely typed and dynamic language. Variables in
            JavaScript are not directly associated with any particular value
            type, and any variable can be assigned (and re-assigned) values of
            all types:
          </RegularText>
        </div>
        <img src={code} />
        
      </PostCard>
    </PostContentContainer>
  );
}
