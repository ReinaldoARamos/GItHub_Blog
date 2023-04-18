import { RegularText, TitleText } from "../../../../Typography/Typography";
import { PostContainer } from "./style";


interface IPost{
  body: string,
  number: number,
  created_at: string
}
export function Post() {
  return (
    <PostContainer>
      <header>
        <TitleText>JavaScript data types and data structures</TitleText>
        <RegularText size="s">Há 1 dia</RegularText>
      </header>

      <RegularText color="text" size="m" className="Content">
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in
      </RegularText>
    </PostContainer>
  );
}
