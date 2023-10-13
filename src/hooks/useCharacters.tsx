import { useQuery } from '@tanstack/react-query';

import { Character, Response } from '../types/Character';
import { baseUrl, rickAndMortyAPI } from '../api/RickAndMortyAPI';
import { useState } from 'react';
import axios from 'axios';




const getCharacters = async (page: number = 1): Promise<Response> => {

    const response = await axios(`${baseUrl}/character/?page=${page}`)

    return response?.data as Response
}



export const useCharacterList = () => {
    const [page, setPage] = useState(1)
    const { data, error, isLoading, isFetching, isError, isSuccess } = useQuery(["characters", page], () => getCharacters(page),
        {
            keepPreviousData: true,
            refetchOnMount: true
        }

    )



    return { data, error, isLoading, isFetching, isError, page, isSuccess, setPage }

}