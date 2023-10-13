import { useState } from "react"
import Modal from "../Modal/Modatl"


type Props = {
    gender: string, species: string, name: string, status: string, image: string
}

const CharacterCard = ({ gender, species, name, status, image }: Props) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    return (
        <>

            <div className="w-[100%]  max-w-sm bg-opacity-0 border border-black  rounded-lg text-center mb-2 p-2 sm:w-[100%]  md:w-[100%]">
                <img className=" rounded-full w-[150px] mx-auto hover:scale-105 transition-all du" src={image} alt={name} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{name}</div>
                    <p className="text-gray-700 text-base font-bold">
                        {gender}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <button className=" text-white bg-gradient-to-r from-black to-blue-500 w-[100%] rounded-md p-2 font-bold hover:scale-105 transition-all duration-500" onClick={() => setIsOpen(true)}> More info</button>
                </div>
            </div>

            <Modal gender={gender} species={species} name={name} status={status} image={image} open={isOpen}>
                <div className=" flex flex-col items-center w-[100%] gap-2">
                    <p className="font-bold">{name}</p>
                    <p className="font-bold">{gender}</p>
                    <p className="font-bold"> {status} - {species}</p>
                    <button onClick={() => setIsOpen(false)} className="w-[100%] bg-gradient-to-r from-red-900 to-red-500  rounded-md p-2 font-bold  hover:scale-105 transition-all duration-500">Close</button>
                </div>
            </Modal>
        </>
    )
}

export default CharacterCard