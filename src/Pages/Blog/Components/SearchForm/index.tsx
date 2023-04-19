import { RegularText, TitleText } from "../../../../Typography/Typography";
import { SearchContainer } from "./style";
import * as z from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import { useCallback } from "react";
import { api } from "../../../../lib/axios";



const username = import.meta.env.VITE_GITHUB_USERNAME;
const reponame = import.meta.env.VITE_GITHUB_REPONAME;
const SearchFormSchema = z.object({
    query: z.string(),
})


type SearchFormInputs = z.infer<typeof SearchFormSchema>



  
export function SearchInput() {

    const {register, handleSubmit} = useForm<SearchFormInputs>({
        resolver: zodResolver(SearchFormSchema)
    })


    
    const FetchSearch = useCallback(
        async (query : string) => {
            const response = await api.get(`/search/issues?q=${query}%20repo:${username}/${reponame});`)
            return query
        }
      , [])
    
      
    return (
        <SearchContainer>
           <header>
            <TitleText size="s">
                
                Publicações
                <RegularText size="s" >6 publicações</RegularText>
                </TitleText>
                
           </header>
        <input placeholder="Busque uma publicação" type="text" {...register('query') }  />
        </SearchContainer>
    )
}