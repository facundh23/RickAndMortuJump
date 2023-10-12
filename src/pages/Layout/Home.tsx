import CardList from "../../components/Card/CardList"
import EmptyList from "../../components/Card/EmptyList";
import { useCharacterList } from "../../hooks/useCharacters"

const HomePage = () => {
    const characterList = useCharacterList();
    console.log(characterList)
    return (

        <div>
            {characterList?.length !== 0 ? <CardList /> : <EmptyList />}
        </div>
    )
}

export default HomePage