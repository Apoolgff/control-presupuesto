import React from 'react'
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'
import { dateFormat } from '../helpers'
import IconSaving from '../assets/img/icono_ahorro.svg'
import IconHome from '../assets/img/icono_casa.svg'
import IconFood from '../assets/img/icono_comida.svg'
import IconMiscellaneous from '../assets/img/icono_gastos.svg'
import IconLeisure from '../assets/img/icono_ocio.svg'
import IconHealth from '../assets/img/icono_salud.svg'
import IconSubs from '../assets/img/icono_suscripciones.svg'

const iconDictionary = {
    saving: IconSaving,
    food: IconFood,
    home: IconHome,
    miscellaneous: IconMiscellaneous,
    leisure: IconLeisure,
    health: IconHealth,
    subs: IconSubs
}

const Spent = ({ spent }) => {
    const { category, name, quantity, id, date } = spent;

    const leadingActions = () =>(
        <leadingActions>
            <SwipeAction onClick={() => console.log('editar')}>
                Editar
            </SwipeAction>
        </leadingActions>
    )

    const trailingActions = () =>{
        <trailingActions>
            <SwipeAction onClick={()=> console.log('eliminar')}>
                Eliminar
            </SwipeAction>
        </trailingActions>
    }

    return (
        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
                <div className='gasto sombra'>
                    <div className='contenido-gasto'>
                        <img src={iconDictionary[category]} alt="Icono Gasto" />

                        <div className='descripcion-gasto'>
                            <p className='categoria'>{category}</p>
                            <p className='nombre-gasto'>{name}</p>
                            <p className='fecha-gasto'>
                                Agregado el: {''}
                                <span>{dateFormat(date)}</span>
                            </p>
                        </div>
                    </div>
                    <p className='cantidad-gasto'>${quantity}</p>
                </div>
            </SwipeableListItem>
        </SwipeableList>
    )
}

export default Spent