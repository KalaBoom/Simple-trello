import React, {useContext} from 'react'
import Context from '../Context'
import CreateColumn from './CreateColumn'
import Cards from './Cards'

const Columns = () => {
    const {columns, sendData, getColumns} = useContext(Context)

    const deleteColumn = async idColumn => {
        await sendData(`delete/column/${idColumn}`)
        getColumns()    
    }

    return(
        <div className='active-board__cols'>
            {
                columns.map( (col,index) => {
                    return <div key={index} className="active-board__cols__item">
                                <span className="active-board__cols__item__title">{col.title}</span>
                                <Cards cards={col.cards} idColumn={col.id}/>
                                <button className="btn-delete" onClick={deleteColumn.bind(null, col.id)}>&times;</button>
                            </div>
                })
            }
            <CreateColumn/>
        </div>
    )
}

export default Columns