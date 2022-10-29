import { ReactElement } from 'react'
import './modal.css'

type ModalProps = {
  isActive: boolean
  setIsActive: (active: boolean) => void
  children: ReactElement
}

const Modal = ({ isActive, setIsActive, children }: ModalProps) => {
  return (
    <div className={isActive ? 'modal active' : 'modal'} onClick={() => setIsActive(false)}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default Modal
