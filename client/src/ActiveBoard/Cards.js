import React, {Fragment} from 'react'
import CreateCard from './CreateCard'

const Cards = ({cards, idColumn}) => {
    return (
        <Fragment>
            <ul className="active-board__cols__item__cards">
            { cards.length !== 0 &&
                cards.map( (card, index) => {
                    return <li key={index}>{card.title}</li>
                })
            }
            <CreateCard idColumn={idColumn}/>
            </ul>  
        </Fragment> 
    )
}

export default Cards