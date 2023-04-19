import { RegularText, TitleText } from "../../../../Typography/Typography";
import { SearchContainer } from "./style";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useCallback, useContext } from "react";
import { api } from "../../../../lib/axios";
import { BlogContext } from "../../../../Context/context";
import { MagnifyingGlass } from "phosphor-react";

const SearchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof SearchFormSchema>;

interface SearchProps {
  getPosts: (query?: string) => Promise<void>;
}
export function SearchInput() {
  const { register, handleSubmit, reset } = useForm<SearchFormInputs>({
    resolver: zodResolver(SearchFormSchema),
  });
  const { getPost } = useContext(BlogContext);

  async function handleSearch(data: SearchFormInputs) {
    await getPost(data.query);
  }
  return (
    <SearchContainer>
      <header>
        <TitleText size="s">
          Publicações
          <RegularText size="s">6 publicações</RegularText>
        </TitleText>
      </header>
      <div className="Teste">
        <input
          placeholder="Busque uma publicação"
          type="text"
          {...register("query")}
        />
        <button type="submit" onClick={handleSubmit(handleSearch)}>
          {" "}
          <MagnifyingGlass size={17} /> Teste
        </button>
      </div>
    </SearchContainer>
  );
}
