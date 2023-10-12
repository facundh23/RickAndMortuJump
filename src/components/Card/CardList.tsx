
import CharacterCard from './Card'
import { useCharacterList } from '../../hooks/useCharacters';
import { Character } from '../../types/Character';


type Props = {
    characters: Character[]
}

const CardList = ({ characters }: Props) => {
    const characterListQuery = useCharacterList();

    return (

        <div className='bg-hero bg-no-repeat w-[100%] gap-3 p-2 sm:grid sm:grid-cols-2 md:grid-cols-3'>
            {
                characterListQuery && characterListQuery.map((character) => {
                    return <CharacterCard character={character} key={character.id} />
                })
            }
        </div>



    )
}

export default CardList