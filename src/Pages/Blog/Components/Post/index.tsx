import { useCallback, useEffect, useState } from "react";
import { IPosts } from "../..";
import { RegularText, TitleText } from "../../../../Typography/Typography";
import { PostContainer } from "./style";
import { DateFormatter, relativeDateFormatter } from "../../../../utils/dateFormatter";



interface Posts {
  posts: IPosts;
}
export function Post({posts} : Posts) {

  const formattedDate = relativeDateFormatter(posts.created_at);

  return (
    <PostContainer>
      <header>
        <TitleText>JavaScript data types and data structures</TitleText>
        <RegularText size="s">{formattedDate}</RegularText>
      </header>

      <RegularText color="text" size="m" className="Content">
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in
      </RegularText>
    </PostContainer>
  );
}
