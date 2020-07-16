import React, { Fragment, useContext, useCallback } from 'react'
import Context from '../Context'
import useInput from '../hooks/input'

const CreateCard = ({idColumn}) => {
    const input = useInput()
    const {getColumns, sendData} = useContext(Context)

    const addCard = useCallback(async () => {
        await sendData(`/create/card/${idColumn}/${input.bind.value}`)
    })

    return (
        <Fragment>
            <li className="btn-create--card">
                Create button card
                <form onSubmit={(event) => {
                    event.preventDefault()
                    addCard()
                    getColumns()
                }}>
                    <input {...input.bind}/>
                </form>
            </li>
        </Fragment>
    )
}

export default CreateCard