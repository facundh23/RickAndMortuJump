import { useQuery } from "@tanstack/react-query";
import { Character } from "../types/Character";


export const getCharacterDetails = async (id: string) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    return await response.json() as Character
};


export const useCharacter = (userId: string) => {
    const characterQuery = useQuery(["characterId", userId], () => getCharacterDetails(userId));
    return characterQuery;
}