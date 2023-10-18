import { Character } from "../../types/Character"

type Props = {
  open: boolean,
  children: React.ReactNode
  character: Character,
  image: string
}
const Modal = ({ image, open, children }: Props) => {
  return (
    <div className={`fixed h-[100%] inset-0 bg-black/80 z-10 flex justify-center items-center transition-colors ${open ? "visible blur-20" : "invisible"}`}>

      <div onClick={e => e.stopPropagation()} className={`bg-gradient-to-b from-[#202717] to-[#5d910f] rounded-xl h-100  shadow p-4 transition-all ${open ? "scale-100" : "scale-125 opacity-0"}`} >
        <img src={image} className="w-[60%] mx-auto rounded-full mb-2" />

        {children}
      </div>
    </div>
  )
}
export default Modal