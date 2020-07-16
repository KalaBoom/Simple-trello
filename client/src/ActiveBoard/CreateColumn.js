import React, {useCallback, useState, useContext, useEffect} from 'react'
import Context from '../Context'
import useInput from '../hooks/input'
// function useInput() {
//     const [value, setValue] = useState('')
//     return {
//         input:  {
//             value: value,
//             onChange: event => setValue(event.target.value)
//         }
//     }
// }

function CreateColumn() {
    const input = useInput()
    const {id: idBoard, sendData, getColumns} = useContext(Context)
    
    const addColumn = useCallback(async () => {
        await sendData(`/create/column/${idBoard}/${input.bind.value}`)
       
    })

    return (
        <div className="active-board__cols__item btn-create--column">
            Create button Columns
            <form onSubmit={async event => {
                event.preventDefault()
                addColumn()
                await getColumns()
                await getColumns()
            }}>
                <input {...input.bind}/>
            </form>
        </div>
    )
}

export default CreateColumn