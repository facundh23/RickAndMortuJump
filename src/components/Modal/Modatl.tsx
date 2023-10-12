import { Character } from "../../types/Character"

type Props = {
  open: boolean,
  children: React.ReactNode
  character: Character,
  image: string
}
const Modal = ({ image, open, children }: Props) => {
  return (
    <div className={`fixed inset-0 bg-black/60  flex justify-center items-center transition-colors ${open ? "visible bg-black/20" : "invisible"}`}>

      <div onClick={e => e.stopPropagation()} className={`bg-gradient-to-b from-green-900 to-blue-500 rounded-xl shadow p-6 transition-all ${open ? "scale-100" : "scale-125 opacity-0"}`} >
        <img src={image} />

        {children}
      </div>
    </div>
  )
}
export default Modal