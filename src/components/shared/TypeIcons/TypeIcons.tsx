import React from "react";
import { useNavigate } from "react-router";
import { PokemonType } from "../../../interfaces/PokemonData";
import { mapTypeToIcon } from "../../../utils/mapTypeToIcon";

interface TypeIconsPros {
  types: PokemonType[];
}

export const TypeIcons: React.FC<TypeIconsPros> = ({ types }) => {
  const navigate = useNavigate();
  const onClick = (type: PokemonType) => navigate(`/type/${type.type.name}`);

  return (
    <div className="absolute top-2 right-2 gap-2 cursor-pointer">
      {types.map((type) => (
        <div
          key={type.type.name}
          className="bg-white p-1 rounded-full w-6 h-6 mb-1"
          onClick={() => onClick(type)}
        >
          <img src={mapTypeToIcon(type)} alt={`${type.type.name} icon`} />
        </div>
      ))}
    </div>
  );
};
