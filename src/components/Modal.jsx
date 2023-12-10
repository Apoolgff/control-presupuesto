import { useState } from 'react'
import Message from './Message'
import CloseBtn from '../assets/img/cerrar.svg'

const Modal = ({ setModal, animarModal, setAnimarModal, saveExpenses }) => {
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')
  const [category, setCategory] = useState('')

  const closeModal = () => {
    setAnimarModal(false)

    setTimeout(() => {
      setModal(false)
    }, 500);
  }

  const handleSubmit = e => {
    e.preventDefault();
    if([name, quantity, category].includes('')){
      setMessage('Todos los campos son obligatorios')

      setTimeout(() => {
        setMessage('')
      }, 3000);
      return;
    }
    saveExpenses({name, quantity, category});
  }

  return (
    <div className='modal'>
      <div className='cerrar-modal'>
        <img src={CloseBtn}
          alt="cerrar modal"
          onClick={closeModal}
        />
      </div>

      <form
        onSubmit={handleSubmit}
        className={`formulario ${animarModal ? "animar" : 'cerrar'}`}
      >
        <legend>Nuevo Gasto</legend>
        {message && <Message tipo="error">{message}</Message>}

        <div className='campo'>
          <label htmlFor="name">Nombre Gasto</label>
          <input
            id='name'
            type="text"
            placeholder='En que se gastara'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className='campo'>
          <label htmlFor="quantity">Cantidad</label>
          <input
            id='quantity'
            type="number"
            placeholder='Cantidad a gastar'
            value={quantity}
            onChange={e => setQuantity(Number(e.target.value))}
          />
        </div>

        <div className='campo'>
          <label htmlFor="category">Categoria</label>
          <select
            id="category"
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            <option value="">--Seleccione--</option>
            <option value="saving">--Ahorro--</option>
            <option value="food">--Comida--</option>
            <option value="home">--Casa--</option>
            <option value="miscellaneous">--Gastos Varios--</option>
            <option value="leisure">--Ocio--</option>
            <option value="health">--Salud--</option>
            <option value="subs">--Suscripciones--</option>
          </select>
        </div>

        <input type="submit" value="Agregar Gasto" />
      </form>
    </div>
  )
}

export default Modal