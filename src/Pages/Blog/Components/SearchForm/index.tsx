import { RegularText, TitleText } from "../../../../Typography/Typography";
import { SearchContainer } from "./style";
import * as z from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'


const SearchFormSchema = z.object({
    query: z.string(),
})

type SearchFormInputs = z.infer<typeof SearchFormSchema>


const {register, handleSubmit, formState} = useForm<SearchFormInputs>({
    resolver: zodResolver(SearchFormSchema)
})
  
export function SearchInput() {
    return (
        <SearchContainer>
           <header>
            <TitleText size="s">
                
                Publicações
                <RegularText size="s" >6 publicações</RegularText>
                </TitleText>
                
           </header>
        <input placeholder="Busque uma publicação" type="text"/>
        </SearchContainer>
    )
}