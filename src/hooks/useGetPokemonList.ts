import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { BASE_URL } from "../constants/urls";
import { PokemonListItems } from "../interfaces/PokemonListItems";

interface PokemonList{
    count: number;
    next: string | null;
    previous: string| null;
    results: PokemonListItems[];
}

export const useGetPokemonList = () => {
    const [url, setUrl]= useState(`${BASE_URL}pokemon?limit36`);

    const {data, isLoading, error} = useQuery <PokemonList>({
        queryKey: ['pokemonList', url],
        queryFn: async () => {
            const response = await fetch(url);
            if(!response.ok){
                throw new Error('Network response was not ok');
            }
            return response.json();
        }
    });

    const goToNextPage = () => {
        if(data?.next){
            setUrl(data.next);
        }

    }

    const goToPreviousPage = () => {
        if(data?.previous){
            setUrl(data.previous);
        }
    }

    return{
        pokemonList:data?.results ?? [],
        isLoading,
        error: error?.message ?? null,
        goToNextPage: data?.next ? goToNextPage : undefined,
        goToPreviousPage: data?.previous ? goToPreviousPage : undefined,
    }
}