import { Dispatch, SetStateAction } from "react"


interface ModalProsp {
    isOpen : boolean,
    setIsOpen : Dispatch<SetStateAction<boolean>>,
    children : React.ReactNode
}

const Modal:React.FC<ModalProsp> = ({isOpen, setIsOpen, children}) => {
    return (
        <div>
            <dialog id="my_modal_2" className={`modal ${isOpen?"modal-open":""}`}>
                <div className="modal-box">
                    {children}
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button onClick={() => {setIsOpen(false)}}></button>
                </form>
            </dialog>
        </div>
    )
}

export default Modal
