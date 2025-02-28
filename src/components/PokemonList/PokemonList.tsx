import React from "react";
import { useGetPokemonList } from "../../hooks/useGetPokemonList";
import { PokemonCard } from "../PokemonCard/PokemonCard";
import { Grid } from "../shared/Grid/Grid";

const PokemonList: React.FC = () => {
  const { pokemonList, isLoading, error, goToNextPage, goToPreviousPage } =
    useGetPokemonList();
  return (
    <Grid goToNextPage={goToNextPage} goToPreviousPage={goToPreviousPage}>
    
      {pokemonList?.map((pokemon) => (
        <PokemonCard key={pokemon?.name} pokemon={pokemon} />
      ))}
    </Grid>
  );
};
export default PokemonList;
