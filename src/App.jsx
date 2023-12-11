import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import ExpensesList from './components/ExpensesList'
import { generateId } from './helpers'
import IconNewSpent from './assets/img/nuevo-gasto.svg'

function App() {
  const [expenses, setExpenses] = useState([])
  const [budget, setBudget] = useState(0)
  const [isValidBudget, setIsValidBudget] = useState(false)
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)


  const handleNewSpent = () => {
    setModal(true)

    setTimeout(() => {
      setAnimarModal(true)
    }, 500)
  }

  const saveExpenses = spent => {
    spent.id = generateId();
    spent.date = Date.now();
    setExpenses([...expenses, spent])

    setAnimarModal(false)

    setTimeout(() => {
      setModal(false)
    }, 500);
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        expenses={expenses}
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {isValidBudget && (
        <>
        <main>
          <ExpensesList 
            expenses={expenses}
          />
        </main>
          <div className='nuevo-gasto'>
            <img
              src={IconNewSpent}
              alt="icon new spent"
              onClick={handleNewSpent}
            />
          </div>
        </>
      )}

      {modal &&
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          saveExpenses={saveExpenses}
        />}

    </div>
  )
}

export default App
