import React from 'react'
import Show from './Show'
import Created from './Created'
import './MainBoard.scss'

function MainBoard() {
    return (
        <main className="main">
            <Created/>
            <Show/>
        </main>
    ) 
}

export default MainBoard
