import React, { Fragment, useContext, useState} from 'react'
import Context from '../Context'
import useInput from '../hooks/input'

const CreateCard = ({idColumn}) => {
    const [show, setShow] = useState(false)
    const input = useInput()
    const {getColumns, sendData} = useContext(Context)

    const addCard = async () => {
        await sendData(`/create/card/${idColumn}/${input.bind.value}`)
    }
    const classNameForm = "active-board__form-create form"
    return (
        <Fragment>
            <li className="btn-create--card" onClick={() => setShow(!show)}>
                <span className={show ? 'hide' : 'show btn-create--card__text'}>Create card</span>
                <form onSubmit={(event) => {
                    event.preventDefault()
                    addCard()
                    getColumns()
                    setShow(false)
                }} className={show ? `${classNameForm}--show` : `${classNameForm}--hide`}>
                    <input {...input.bind} onClick={e => e.stopPropagation()} className="btn__input"/>
                </form>
            </li>
        </Fragment>
    )
}

export default CreateCard