import { useQuery } from "@tanstack/react-query"
import { PokemonListItems } from "../interfaces/PokemonListItems";
import { BASE_URL } from "../constants/urls";

interface Pokemon{
    pokemon: PokemonListItems;
}


interface TypeListInfo{
    pokemon:Pokemon[];
}

const useGetPokemonListByType = (typeName: string) =>{
   const { data, isLoading, error } = useQuery<TypeListInfo>({
           queryKey: ["pokemonListByType", typeName],
           queryFn: async () => {
               const response = await fetch(`${BASE_URL}/type/${typeName}`);
               if (!response.ok) {
                   throw new Error("Network response was not ok");
               }
               return response.json();
           },
       })

       return {
        pokemonList: data?.pokemon ?? [],
        isLoading,
        error: error?.message ?? null,
       };
};

export default useGetPokemonListByType;