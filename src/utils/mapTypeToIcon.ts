import { PokemonTypes } from "../constants/types";
import { PokemonType } from "../interfaces/PokemonData";
import bug from "../assets/bug.svg";
import dark from "../assets/dark.svg";
import dragon from "../assets/dragon.svg";
import electric from "../assets/electric.svg";
import fairy from "../assets/fairy.svg";
import fighting from "../assets/fighting.svg";
import fire from "../assets/fire.svg";
import flying from "../assets/flying.svg";
import grass from "../assets/grass.svg";
import ghost from "../assets/ghost.svg";
import ground from "../assets/ground.svg";
import ice from "../assets/ice.svg";
import normal from "../assets/normal.svg";
import poison from "../assets/poison.svg";
import psychic from "../assets/psychic.svg";
import rock from "../assets/rock.svg";
import steel from "../assets/steel.svg";
import water from "../assets/water.svg";

export const mapTypeToIcon = (type: PokemonType) => {
  switch (type.type.name) {
    case PokemonTypes.bug:
      return bug;
    case PokemonTypes.dark:
      return dark;
    case PokemonTypes.dragon:
      return dragon;
    case PokemonTypes.electric:
      return electric;
    case PokemonTypes.fairy:
      return fairy;
    case PokemonTypes.fighting:
      return fighting;
    case PokemonTypes.fire:
      return fire;
    case PokemonTypes.flying:
      return flying;
    case PokemonTypes.ghost:
      return ghost;
    case PokemonTypes.grass:
      return grass;
    case PokemonTypes.ground:
      return ground;
    case PokemonTypes.ice:
      return ice;
    case PokemonTypes.normal:
      return normal;
    case PokemonTypes.poison:
      return poison;
    case PokemonTypes.psychic:
      return psychic;
    case PokemonTypes.rock:
      return rock;
    case PokemonTypes.steel:
      return steel;
    case PokemonTypes.water:
      return water;
    default:
        return "";
  }
};
