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
        <div className="flex items-center justify-center">

            <div className="w-fit h-fit group m-3 rounded-full">
                <div className="relative overflow-hidden shadow-2xl rounded-full">
                    <img src={image} alt={name} />
                    <div className=" absolute z-1  rounded-full h-full w-full bg-black/90 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="font-bold text-center text-md text-white mb-2">{name}</div>
                        <p className="text-green-700 w-[60%] text-center  font-bold bg-black p-2 rounded-md text-xs sm:text-sm md:text-md">
                            Location : {location.name}
                        </p>
                        <button className=" text-white mt-2 text-xs md:text-md md:p-2  bg-gradient-to-r  from-black to-[#5d910f] w-[80px] sm:w-[100px]  rounded-md p-2 font-bold hover:scale-105 transition-all duration-500" onClick={() => setIsOpen(true)}> More info</button>
                    </div>
                </div>

            </div>

            <Modal gender={gender} species={species} name={name} status={status} image={image} open={isOpen}>
                <div className=" flex flex-col items-center w-[100%] gap-1 rounded-md ">
                    <p className="font-bold flex items-center text-green-400 p-2 bg-black mt-1 w-full justify-center gap-3"> <FcApproval /> Name: {name}</p>
                    <p className="font-bold flex items-center text-green-400 p-2 bg-black mt-1 w-full justify-center gap-3"> <FcApproval /> Gender:  {gender}</p>
                    <p className="font-bold flex items-center text-green-400 p-2 bg-black mt-1 w-full justify-center gap-3"> <FcApproval /> Status:  {status}</p>
                    <p className="font-bold flex items-center text-green-400 p-2 bg-black mt-1 w-full justify-center gap-3"> <FcApproval /> Specie: {species}</p>
                    <p className="font-bold flex items-center text-green-400 p-2 bg-black mt-1 w-full justify-center gap-3"> <FcApproval />  Origin: {origin.name} </p>
                    <button onClick={() => setIsOpen(false)} className="w-[100%] bg-gradient-to-r  from-black to-[#5d910f]  rounded-md p-2 font-bold  hover:scale-105 transition-all duration-500">Close</button>
                </div>
            </Modal>
        </div>
    )
}

export default CharacterCard