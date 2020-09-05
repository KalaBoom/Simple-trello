import React, {Fragment, useContext} from 'react'
import context from '../Context'
import CreateCard from './CreateCard'

const Cards = ({cards, idColumn}) => {
    const {sendData, getColumns} = useContext(context)
    const deleteCard = async idCard => {
        await sendData(`/delete/card/${idCard}`)
        getColumns()
    }

    return (
        <Fragment>
            <ul className="active-board__cols__item__cards">
            { cards.length !== 0 &&
                cards.map( (card, index) => {
                    return <li key={index}>
                        {card.title}
                        <button className="btn-delete" onClick={deleteCard.bind(null, card.id)}>&times;</button>
                        </li>
                })
            }
            <CreateCard idColumn={idColumn}/>
            </ul>  
        </Fragment> 
    )
}

export default Cards