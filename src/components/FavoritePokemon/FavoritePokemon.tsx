import React from "react";
import { useFavoriteStore } from "../../store/useFavoriteStore"
import { PokemonCard } from "../PokemonCard/PokemonCard";
import { Grid } from "../shared/Grid/Grid";

export const FavoritePokemon = () => {
    const favoriteIds = useFavoriteStore((state) => state.favorites);

    return(
        <Grid>
            {favoriteIds.map((favoriteId) =>  <PokemonCard key={favoriteId} pokemonId={Number(favoriteId)}/>)}
        </Grid>
    )
}

