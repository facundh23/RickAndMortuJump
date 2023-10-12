import { useState } from "react"
import Modal from "../Modal/Modatl"
import { Character } from "../../types/Character"

type Props = {
    character: Character
}

const CharacterCard = ({ character }: Props) => {
    console.log(character)
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return (
        <>

            <div className="w-[100%] max-w-sm bg-opacity-0 border border-gray-200 rounded-lg text-center mb-2 p-2  md:w-[100%]">
                <img className="w-full rounded-full w-[200px] mx-auto" src={character.image} alt={character.name} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{character.name}</div>
                    <p className="text-gray-700 text-base font-bold">
                        {character.gender}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <button className="bg-green-200 w-[100%] rounded-md p-2 font-bold" onClick={() => setIsOpen(true)}> More info</button>
                </div>
            </div>

            <Modal character={character} open={isOpen}>
                <div className=" flex flex-col items-center w-[100%] gap-2">
                    <p className="font-bold">{character.name}</p>
                    <p className="font-bold">{character.gender}</p>
                    <p className="font-bold">{character.species}</p>
                    <button onClick={() => setIsOpen(false)} className="w-[100%] bg-red-500 rounded-md p-2 font-bold">Close</button>
                </div>
            </Modal>
        </>
    )
}

export default CharacterCard