import { Character } from "../../types/Character"

type Props = {
  open: boolean,
  children: React.ReactNode
  character: Character,
  image: string
}
const Modal = ({ image, open, children }: Props) => {
  return (
    <div className={`fixed inset-0 bg-black/80  flex justify-center items-center transition-colors ${open ? "visible blur-20" : "invisible"}`}>

      <div onClick={e => e.stopPropagation()} className={`bg-gradient-to-b from-green-900 to-blue-500 rounded-xl shadow p-4 transition-all ${open ? "scale-100" : "scale-125 opacity-0"}`} >
        <img src={image} className="w-[70%] mx-auto rounded-full mb-2" />

        {children}
      </div>
    </div>
  )
}
export default Modal