import React from 'react'
import Spent from './Spent'

const ExpensesList = ({ expenses, setSpentEdit, deleteExpenses, filter, filterExpenses }) => {
  return (
    <div className='listado-gastos contenedor'>
      {
        filter ? (
          <>
          <h2>{filterExpenses.length ? 'Gastos' : 'No hay gastos en esta categoria'}</h2>
            {filterExpenses.map(spent => (
              <Spent
                key={spent.id}
                spent={spent}
                setSpentEdit={setSpentEdit}
                deleteExpenses={deleteExpenses}
              />
            ))}
          </>
        ) : (
          <>
          <h2>{expenses.length ? 'Gastos' : 'No hay gastos'}</h2>
            {expenses.map(spent => (
              <Spent
                key={spent.id}
                spent={spent}
                setSpentEdit={setSpentEdit}
                deleteExpenses={deleteExpenses}
              />
            ))}
          </>
        )
      }

    </div>
  )
}

export default ExpensesList