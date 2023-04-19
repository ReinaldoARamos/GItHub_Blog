import { RegularText, TitleText } from "../../../../Typography/Typography";
import { PostContainer } from "./style";
import { relativeDateFormatter } from "../../../../utils/dateFormatter";
import { IPosts } from "../../../../Context/context";

interface Posts {
  posts: IPosts;
}
export function Post({ posts }: Posts) {
  const formattedDate = relativeDateFormatter(posts.created_at);

  return (
    <PostContainer>
      <header>
        <p>
          <TitleText className="title">{posts.title}</TitleText>
        </p>

        <RegularText size="s">{formattedDate}</RegularText>
      </header>

      <RegularText color="text" size="m" className="Content">
        {posts.body}
      </RegularText>
    </PostContainer>
  );
}
