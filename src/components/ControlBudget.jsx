import React from 'react'

const ControlBudget = ({budget}) => {

    const formatCurrency = (quantity) => {
        return quantity.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <p>grafica</p>
        </div>

        <div>
            <p className='contenido-presupuesto'>
                <span>Presupuesto: </span> {formatCurrency(budget)}
            </p>

            <p className='contenido-presupuesto'>
                <span>Disponible: </span> {formatCurrency(budget)}
            </p>

            <p className='contenido-presupuesto'>
                <span>Gastado: </span> {formatCurrency(0)}
            </p>
        </div>
    </div>
  )
}

export default ControlBudget