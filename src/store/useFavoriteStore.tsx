import { create } from "zustand";
interface FavoriteStore {
    favorites: string[];
    addFavorite: (id: string) => void;
    deletefavorite: (id: string) => void;
}


export const useFavoriteStore = create<FavoriteStore>((set) => ({
    favorites: localStorage.getItem("favorite-pokemon")?.split(",") || [],
    addFavorite: (id:string) => set((state) => {
        const favorites = [...state.favorites, id];
        localStorage.setItem("favorite-pokemon", favorites.join(","));
        return { favorites };
    }),
    deletefavorite: (id: string) => set((state) => {
        const favorites = state.favorites.filter((favorite) => favorite !== id);
        localStorage.setItem("favorite-pokemon", favorites.join(","));
        return { favorites };
    })
}) );