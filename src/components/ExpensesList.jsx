import React from 'react'
import Spent from './Spent'

const ExpensesList = ({expenses}) => {
  return (
    <div className='listado-gastos contenedor'>
        <h2>{expenses.length ? 'Gastos' : 'No hay gastos'}</h2>

        {expenses.map( spent => (
            <Spent
                key={spent.id}
                spent={spent}
            />
        ))}
    </div>
  )
}

export default ExpensesList