import React from 'react'
import Spent from './Spent'

const ExpensesList = ({expenses, setSpentEdit, deleteExpenses}) => {
  return (
    <div className='listado-gastos contenedor'>
        <h2>{expenses.length ? 'Gastos' : 'No hay gastos'}</h2>

        {expenses.map( spent => (
            <Spent
                key={spent.id}
                spent={spent}
                setSpentEdit={setSpentEdit}
                deleteExpenses={deleteExpenses}
            />
        ))}
    </div>
  )
}

export default ExpensesList