
import CharacterCard from './Card'
import { useCharacterList } from '../../hooks/useCharacters';
import { useSearchParams } from 'react-router-dom';



const CardList = () => {
    const characterListQuery = useCharacterList();
    const [searchParams] = useSearchParams();

    const query = searchParams.get("q") ?? "Busca tu personaje";

    return (



        <div className='bg-gradient-to-r from-green-900 to-blue-500 w-[100%] h-[100%] bg-cover gap-3 p-2 sm:grid sm:grid-cols-2 md:grid-cols-3'>
            {


                characterListQuery &&

                characterListQuery.filter(({ name }) => {


                    if (!query) return true;

                    if (query) {
                        const nameToLowerCase = name.toLowerCase();
                        return nameToLowerCase.includes(query.toLowerCase());
                    }
                })
                    .map(({ name, id, gender, status, species, image }) => (
                        <CharacterCard name={name} gender={gender} status={status} species={species} image={image} key={id} />
                    ))
            }

        </div>



    )
}

export default CardList