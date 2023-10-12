import { useQuery } from '@tanstack/react-query';
import { Character } from '../types/Character';
import { sleep } from '../helper/sleep';


const getCharacters = async (): Promise<Character[]> => {
    sleep(2000);
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const { results } = await response.json()
    return results
}

export const useCharacterList = () => {
    const characterListQuery = useQuery(["characters"], getCharacters)
    const { data } = characterListQuery;
    if (data) {
        return data
    }

}