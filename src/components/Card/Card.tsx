import { useState } from "react"
import { FcApproval } from 'react-icons/fc'
import { Location } from "../../types/Character"
import Modal from "../Modal/Modatl"

type Props = {
    gender: string, species: string, name: string, status: string, image: string, origin: Location, location: Location
}

const CharacterCard = ({ gender, species, name, status, image, origin, location }: Props) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);


    return (
        <div>

            <div className="w-[100%] flex items-center border border-black shadow-2xl hover:scale-105 rounded-lg text-center mb-2 p-2 hover:bg-black/20 transition-all duration-300 sm:w-[100] md:w-[100] sm:flex sm:flex-col md:h-[90%]">
                <img className=" rounded-full w-[70px] mx-auto hover:scale-105 transition-all duration-500 sm:w-[90px] md:w-[100px]" src={image} alt={name} />
                <div className="px-6 py-4">
                    <div className="font-bold  mb-2 text-xs sm:text-sm md:text-md">{name}</div>
                    <p className="text-green-700  font-bold bg-black p-2 rounded-md text-xs sm:text-sm md:text-md">
                        Location : {location.name}
                    </p>
                    <button className=" text-white mt-2 text-xs md:text-md md:p-2  bg-gradient-to-r from-black to-blue-500 w-[80px] sm:w-[100px]  rounded-md p-2 font-bold hover:scale-105 transition-all duration-500" onClick={() => setIsOpen(true)}> More info</button>
                </div>

            </div>

            <Modal gender={gender} species={species} name={name} status={status} image={image} open={isOpen}>
                <div className=" flex flex-col items-center w-[100%] gap-1 rounded-md ">
                    <p className="font-bold flex items-center text-green-400 p-2 bg-black mt-1 w-full justify-center gap-3"> <FcApproval /> Name: {name}</p>
                    <p className="font-bold flex items-center text-green-400 p-2 bg-black mt-1 w-full justify-center gap-3"> <FcApproval /> Gender:  {gender}</p>
                    <p className="font-bold flex items-center text-green-400 p-2 bg-black mt-1 w-full justify-center gap-3"> <FcApproval /> Status:  {status}</p>
                    <p className="font-bold flex items-center text-green-400 p-2 bg-black mt-1 w-full justify-center gap-3"> <FcApproval /> Specie: {species}</p>
                    <p className="font-bold flex items-center text-green-400 p-2 bg-black mt-1 w-full justify-center gap-3"> <FcApproval />  Origin: {origin.name} </p>
                    <button onClick={() => setIsOpen(false)} className="w-[100%] bg-gradient-to-r from-red-900 to-red-500  rounded-md p-2 font-bold  hover:scale-105 transition-all duration-500">Close</button>
                </div>
            </Modal>
        </div>
    )
}

export default CharacterCard