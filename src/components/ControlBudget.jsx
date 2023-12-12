import { useState, useEffect } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const ControlBudget = ({ expenses, budget }) => {
    const [percentage, setPercentage] = useState(0)
    const [available, setAvailable] = useState(0)
    const [spent, setSpent] = useState(0)

    useEffect(() => {
        const totalSpent = expenses.reduce((total, spent) => spent.quantity + total, 0)
        const totalAvailable = budget - totalSpent;

        const newPercentage = (((budget - totalAvailable) / budget) * 100).toFixed(2);

        setAvailable(totalAvailable)
        setSpent(totalSpent)

        setTimeout(() => {
            setPercentage(newPercentage)
        }, 1000);

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
                <CircularProgressbar
                    styles={buildStyles({
                        pathColor: '#3B82F6',
                        trailColor: '#F5F5F5',
                        textColor: '#3B82F6'
                    })}
                    value={percentage}
                    text={`${percentage}% Gastado`}
                />
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