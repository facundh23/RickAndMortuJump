import { useState } from "react"
import Modal from "../Modal/Modatl"



const CharacterCard = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return (
        <>

            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                    <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <button className="btn btn-danger" onClick={() => setIsOpen(true)}> Mor info</button>
                </div>
            </div>

            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                <h1>Hola</h1>
            </Modal>
        </>
    )
}

export default CharacterCard