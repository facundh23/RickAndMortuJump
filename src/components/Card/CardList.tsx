
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSearchParams } from 'react-router-dom';
import { useCharacter } from '../../hooks/useCharacters';
import CharacterCard from './Card'
import Spinner from '../../assets/spinner/Spinner';

const CardList = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q") ?? "";

    const { characters, error, fetchNextPage, hasNextPage, status } = useCharacter()

    if (status === 'loading') return <Spinner />

    if (status === 'error') return <h4>Ups!, {`${error}` as string}</h4>



    return (
        <>


            <InfiniteScroll
                dataLength={characters ? characters.results.length : 1}
                next={() => fetchNextPage()}
                hasMore={!!hasNextPage}
                loader={<Spinner />}
            >
                <div className='bg-gradient-to-r from-green-900 to-blue-500 w-full min-h-full h-full bg-cover gap-3 p-2 sm:grid sm:items-center sm:grid-cols-2 md:grid-cols-3 md:place-items-center lg:grid-cols-4 lg:place-items-center'>
                    {



                        characters?.results.filter(({ name }) => {


                            if (!query) return true

                            if (query) {
                                const nameToLowerCase = name.toLowerCase();
                                return nameToLowerCase.includes(query.toLowerCase());
                            }
                        })
                            .map(({ name, id, gender, status, species, image, origin, location }) => (
                                <CharacterCard name={name} gender={gender} status={status} species={species} origin={origin} image={image} location={location} key={id} />
                            ))
                    }
                </div>

            </InfiniteScroll >
        </>





    )
}

export default CardList