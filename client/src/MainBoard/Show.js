import React, {useContext} from 'react'
import Context from '../Context'
import {Link} from 'react-router-dom'

function Show() {
    const {boards} = useContext(Context)
    return (
        <div className="boards">
            {boards.length !== 0 ? 
                boards.map((board, index) => {
                    return <Link key={index} className="boards__item" to={board.href}>{board.title}</Link>
                }) :
                <p>No boards</p>
            }
        </div>
    )
}

export default Show