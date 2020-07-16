import React, {useEffect, useState, useCallback} from 'react'
import Context from '../Context'
import Columns from './Columns'
import useGetData from '../hooks/getData.hook'
import useSendData from '../hooks/sendData.hook'
import './ActiveBoard.scss'

function Board({title, id}) {
    const {getData} = useGetData()
    const {sendData} = useSendData()
    const [columns, setColumns] = useState([])
    
    const getColumns = useCallback(async () => {
        const data = await getData(id)
        console.log(data)
        setColumns(data)
    })
    
    useEffect(() => {
        getColumns()
    }, [])

    return(
        <div className="active-board">
            <h1>{title}</h1>
            <Context.Provider value={{id, columns, setColumns, sendData, getColumns}}>
                <Columns/>
            </Context.Provider>
        </div>
    )
} 

export default Board