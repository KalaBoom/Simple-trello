import React, {useContext, useCallback} from 'react'
import Context from '../Context'
import {Link} from 'react-router-dom'

function Show() {
    const {boards, sendData, getBoards} = useContext(Context)
    
    const deleteBoard = useCallback(async idBoard => {
        console.log(idBoard)
        await sendData(`/delete/board/${idBoard}`)
        getBoards()
    })

    return (
        <div className="boards">
            {boards.length !== 0 ? 
                boards.map((board, index) => {
                    return <div key={index}>
                         <Link  className="boards__item" to={board.href}>
                            {board.title}
                        </Link>
                        <button onClick={ event => {
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