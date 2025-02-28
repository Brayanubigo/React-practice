export interface PokemonType{
    slot: number;
    type: {
        name: string;
        url: string;
    }
}
export interface PokemonSprites{
    back_default?: string;
    back_shiny?: string;
    front_default?: string;
    front_shiny?: string;
}

export interface PokemonData {
  id: number;
name: string;
height: number;
weight: number;
types: PokemonType[] ;
sprites: PokemonSprites; 
}