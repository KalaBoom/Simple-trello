import React, {useContext, useState} from 'react'
import Context from '../Context'
import useInput from '../hooks/input'

function CreateColumn() {
    const [show, setShow] = useState(false)
    const input = useInput()
    const {id: idBoard, sendData, getColumns} = useContext(Context)
    
    const addColumn = async () => {
        await sendData(`/create/column/${idBoard}/${input.bind.value}`)
    }

    const classNameForm = "active-board__form-create form"
    return (
        <div onClick={() => setShow(!show)} className="active-board__cols__item btn-create--column">
            <span className={show ? 'hide' : 'show btn-create--column__text'}>Create column</span>
            <form onSubmit={event => {
                event.preventDefault()
                addColumn()
                    .then(getColumns)
                    .catch(e => console.error(`Error: ${e.message}`))
                setShow(false)
            }} className={show ? `${classNameForm}--show` : `${classNameForm}--hide`}>
                <input {...input.bind} onClick={e => e.stopPropagation()}/>
            </form>
        </div>
    )
}

export default CreateColumn