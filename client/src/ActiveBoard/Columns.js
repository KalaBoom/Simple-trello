import React, {useContext} from 'react'
import Context from '../Context'
import CreateColumn from './CreateColumn'
import Cards from './Cards'

const Columns = () => {
    const {columns} = useContext(Context)
    return(
        <div className='active-board__cols'>
            {
                columns.map( (col,index) => {
                    return <div key={index} className="active-board__cols__item">
                                <span className="active-board__cols__item__title">{col.title}</span>
                                <Cards cards={col.cards} idColumn={col.id}/>
                            </div>
                })
            }
            <CreateColumn/>
        </div>
    )
}

export default Columns