import React, {useContext} from 'react'
import Context from '../Context'
import {Link} from 'react-router-dom'

function Show() {
    const {boards, sendData, getBoards} = useContext(Context)
    
    const deleteBoard = async idBoard => {
        await sendData(`/delete/board/${idBoard}`)
        getBoards()
    }

    return (
        <div className="boards">
            {boards.length !== 0 ? 
                boards.map((board, index) => {
                    return <div key={index} className="boards__item-block">
                         <Link to={board.href} className="boards__item">
                            {board.title}
                        </Link>
                        <button className="boards__btn-delete" onClick={ event => {
                            event.stopPropagation()
                            deleteBoard(board._id)
                        }}>&times;</button>
                    </div>
                   
                }) :
                <p>No boards</p>
            }
        </div>
    )
}

export default Show