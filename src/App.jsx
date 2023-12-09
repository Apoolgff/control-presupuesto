import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import IconNewSpent from './assets/img/nuevo-gasto.svg'

function App() {
  const [budget, setBudget] = useState(0)
  const [isValidBudget, setIsValidBudget] = useState(false)
  const [modal, setModal] = useState(false)

  const handleNewSpent = () => {
    setModal(true)
  }

  return (
    <div>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {isValidBudget && (
        <div className='nuevo-gasto'>
          <img
            src={IconNewSpent}
            alt="icon new spent"
            onClick={handleNewSpent}
          />
        </div>
      )}

        {modal && 
        <Modal 
         setModal={setModal}
        />}

    </div>
  )
}

export default App
