import { useState } from 'react'
import CloseBtn from '../assets/img/cerrar.svg'

const Modal = ({setModal}) => {

    const closeModal = () =>{
        setModal(false)
    }

  return (
    <div className='modal'>
        <div className='cerrar-modal'>
            <img src={CloseBtn} 
            alt="cerrar modal" 
            onClick={closeModal}
            />
        </div>
    </div>
  )
}

export default Modal