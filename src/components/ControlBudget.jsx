import { useState, useEffect } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const ControlBudget = ({ expenses, setExpenses, budget, setBudget, setIsValidBudget }) => {
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

    const handleResetApp = () =>{
        const res = confirm('Confirmar reinicio de presupuesto y gastos?');

        if(res){
            setExpenses([])
            setBudget(0)
            setIsValidBudget(false)
        }
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <CircularProgressbar
                    styles={buildStyles({
                        pathColor: percentage > 100 ? '#DC2626' : '#3B82F6',
                        trailColor: '#F5F5F5',
                        textColor: percentage > 100 ? '#DC2626' : '#3B82F6'
                    })}
                    value={percentage}
                    text={`${percentage}% Gastado`}
                />
            </div>

            <div className='contenido-presupuesto'>
                <button className='reset-app'
                type='button'
                onClick={handleResetApp}
                >
                    Resetear Presupuesto
                </button>
                <p>
                    <span>Presupuesto: </span> {formatCurrency(budget)}
                </p>

                <p className={`${available < 0 ? 'negativo' : ''}`}>
                    <span>Disponible: </span> {formatCurrency(available)}
                </p>

                <p>
                    <span>Gastado: </span> {formatCurrency(spent)}
                </p>
            </div>
        </div>
    )
}

export default ControlBudget