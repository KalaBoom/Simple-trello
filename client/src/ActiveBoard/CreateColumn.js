import React, {useCallback, useContext} from 'react'
import Context from '../Context'
import useInput from '../hooks/input'

function CreateColumn() {
    const input = useInput()
    const {id: idBoard, sendData, getColumns} = useContext(Context)
    
    const addColumn = useCallback(async () => {
        await sendData(`/create/column/${idBoard}/${input.bind.value}`)
    })

    return (
        <div className="active-board__cols__item btn-create--column">
            Create button Columns
            <form onSubmit={event => {
                event.preventDefault()
                addColumn()
                    .then(getColumns)
                    .catch(e => console.error(`Error: ${e.message}`))
            }}>
                <input {...input.bind}/>
            </form>
        </div>
    )
}

export default CreateColumn