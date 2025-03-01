import React, { useMemo } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { useFavoriteStore } from "../../../store/useFavoriteStore";
interface FavoriteButtonProps {
  pokemonId: number;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  pokemonId,
}) => {
  const [favorites, addFavorite, deletefavorite] = useFavoriteStore((state) => [
    state.favorites,
    state.addFavorite,
    state.deletefavorite,
  ]);

  const isFavorite = useMemo(
    () => favorites.includes(pokemonId.toString()),
    [favorites, pokemonId]
  );
  const onClick = () => {
    const idToModify = pokemonId.toString();
    isFavorite ? deletefavorite(idToModify) : addFavorite(idToModify);
  };

  return (
    <button
      onClick={onClick}
      className="bg-white p-1 rounded-full absolute top-2 left-2"
    >
      {isFavorite ? <FaHeart fill="#EF4444" /> : <FaRegHeart fill="#EF4444" />}
    </button>
  );
};
