import { useState, useEffect } from 'react'

const Filters = ({ filter, setFilter }) => {
    return (
        <div className='filtros sombra contenedor'>
            <form>
                <div className='campo'>
                    <label>Filtrar Gastos</label>
                    <select
                        value={filter}
                        onChange={e => setFilter(e.target.value)}
                    >
                        <option value="">--Todas las Categorias--</option>
                        <option value="saving">--Ahorro--</option>
                        <option value="food">--Comida--</option>
                        <option value="home">--Casa--</option>
                        <option value="miscellaneous">--Gastos Varios--</option>
                        <option value="leisure">--Ocio--</option>
                        <option value="health">--Salud--</option>
                        <option value="subs">--Suscripciones--</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Filters