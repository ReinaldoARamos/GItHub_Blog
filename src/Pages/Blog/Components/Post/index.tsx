import { useCallback, useEffect, useState } from "react";
import { IPosts } from "../..";
import { RegularText, TitleText } from "../../../../Typography/Typography";
import { PostContainer } from "./style";
import { relativeDateFormatter } from "../../../../utils/dateFormatter";



interface Posts {
  posts: IPosts;
}
export function Post({posts} : Posts) {

  const formattedDate = relativeDateFormatter(posts.created_at);

  return (
    <PostContainer>
      <header>
        <TitleText>{posts.title}</TitleText>
        <RegularText size="s">{formattedDate}</RegularText>
      </header>

      <RegularText color="text" size="m" className="Content">
       {posts.body}
      </RegularText>
    </PostContainer>
  );
}
