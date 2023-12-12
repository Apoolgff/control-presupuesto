import { useState, useEffect} from 'react'

const ControlBudget = ({expenses, budget}) => {
    const [available, setAvailable] = useState(0)
    const [spent, setSpent] = useState(0)

    useEffect( ()=> {
        const totalSpent = expenses.reduce( (total, spent)=> spent.quantity + total, 0)
        const totalAvailable = budget - totalSpent;

        setAvailable(totalAvailable)
        setSpent(totalSpent)
    }, [expenses])

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
                <span>Disponible: </span> {formatCurrency(available)}
            </p>

            <p className='contenido-presupuesto'>
                <span>Gastado: </span> {formatCurrency(spent)}
            </p>
        </div>
    </div>
  )
}

export default ControlBudget