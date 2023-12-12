import { useState, useEffect } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import Filters from './components/Filters'
import ExpensesList from './components/ExpensesList'
import { generateId } from './helpers'
import IconNewSpent from './assets/img/nuevo-gasto.svg'

function App() {
  const [expenses, setExpenses] = useState(localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')) : [])
  const [budget, setBudget] = useState(Number(localStorage.getItem('budget')) ?? 0)
  const [isValidBudget, setIsValidBudget] = useState(false)
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)
  const [spentEdit, setSpentEdit] = useState({})
  const [filter, setFilter] = useState('')
  const [filterExpenses, setFilterExpenses] = useState([])

  useEffect(() => {
    if (Object.keys(spentEdit).length > 0) {
      setModal(true)

      setTimeout(() => {
        setAnimarModal(true)
      }, 500)
    }
  }, [spentEdit])

  useEffect(() => {
    localStorage.setItem('budget', budget ?? 0)
  }, [budget])

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses) ?? [])
  }, [expenses])

  useEffect(()=>{
    if(filter){
      const filterExpenses = expenses.filter(spent => spent.category === filter)
      setFilterExpenses(filterExpenses)
    }
  }, [filter])

  useEffect(() => {
    const budgetLS = Number(localStorage.getItem('budget')) ?? 0;
    if (budgetLS > 0) {
      setIsValidBudget(true)
    }
  }, [])

  const handleNewSpent = () => {
    setModal(true)
    setSpentEdit({})

    setTimeout(() => {
      setAnimarModal(true)
    }, 500)
  }

  const saveExpenses = spent => {
    if (spent.id) {
      const updatedExpenses = expenses.map(spentState => spentState.id === spent.id
        ? spent : spentState)
      setExpenses(updatedExpenses)
      setSpentEdit({})
    } else {
      spent.id = generateId();
      spent.date = Date.now();
      setExpenses([...expenses, spent])
    }

    setAnimarModal(false)

    setTimeout(() => {
      setModal(false)
    }, 500);
  }

  const deleteExpenses = id => {
    const updatedExpenses = expenses.filter(spent => spent.id !== id);
    setExpenses(updatedExpenses)
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        expenses={expenses}
        setExpenses={setExpenses}
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {isValidBudget && (
        <>
          <main>
            <Filters
              filter={filter}
              setFilter={setFilter}
            />
            <ExpensesList
              expenses={expenses}
              setSpentEdit={setSpentEdit}
              deleteExpenses={deleteExpenses}
              filter={filter}
              filterExpenses={filterExpenses}
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
          spentEdit={spentEdit}
          setSpentEdit={setSpentEdit}
        />}

    </div>
  )
}

export default App
