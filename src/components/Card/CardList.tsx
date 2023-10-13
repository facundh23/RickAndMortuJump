
import CharacterCard from './Card'
import { useCharacterList } from '../../hooks/useCharacters';
import { useSearchParams } from 'react-router-dom';



const CardList = () => {
    const { data, isSuccess, page, setPage } = useCharacterList();
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q") ?? "";

    const handleNext = () => {
        setPage(page + 1);
    };
    const handlePrev = () => {
        setPage((old) => Math.max(old - 1, 0));
    };


    return (
        <>


            <div className='bg-gradient-to-r from-green-900 to-blue-500 w-full min-h-full h-full bg-cover gap-3 p-2 sm:grid sm:grid-cols-2 md:grid-cols-3'>
                {
                    isSuccess && data!.results.length ?


                        data!.results.filter(({ name }) => {


                            if (!query) return true

                            if (query) {
                                const nameToLowerCase = name.toLowerCase();
                                return nameToLowerCase.includes(query.toLowerCase());
                            }
                        })
                            .map(({ name, id, gender, status, species, image }) => (
                                <CharacterCard name={name} gender={gender} status={status} species={species} image={image} key={id} />
                            )) : null
                }
            </div>
            <div className='flex justify-around w-full'>

                <button className='bg-orange-500 p-1 rounded-md font-bold hover:scale-105 duration-200 w-100' disabled={page === 1} onClick={() => handlePrev()}> Prev Page </button>
                <p>{page}</p>
                <button className='bg-green-500 p-1 rounded-md font-bold w-100 hover:scale-105 duration-200' disabled={page === 42} onClick={() => handleNext()}> Next Page</button>
            </div>

        </>





    )
}

export default CardList