
import CardList from "../../components/Card/CardList"
import { useCharacterList } from "../../hooks/useCharacters"





const HomePage = () => {
    const { isLoading, data } = useCharacterList();

    return (
        <>


            <div className=" bg-gradient-to-r from-green-900  to-blue-500 min-h-screen flex flex-col justify-start items-center">

                {
                    isLoading ? "Loading hacer skeleton" : <CardList />
                }

            </div>


        </>
    )
}

export default HomePage