import React, {useState, useContext} from 'react'
import Context from '../Context'

function Created() {
    const [show, setShow] = useState(false)
    const [title, setTitle] = useState('')
    const {createBoard, loading} = useContext(Context)

    function btnCreate(title) {
        createBoard(title)
            .then(() => {
                setTitle('')
                setShow(false)
            })
            .catch(() => {
                console.log("error")
            })
    }
     
    return (
            <div className="create__block">
                <span onClick={() => setShow(true)} className={show ? "create__button animate--form-hide" : "create__button animate--form-show"}>New board</span>
                <form onSubmit={event => event.preventDefault()} className={show ? "create__form animate--form-show" : "create__form animate--form-hide"}>
                    <input value={title} onChange={event => setTitle(event.target.value)} className="create__form__input" placeholder="Enter name new board"/> <br/>
                    <div className="create__form__buttons">
                        <button className="button--create" disabled={loading} onClick={btnCreate.bind(null, title)}>Create</button>
                        <button className="button--cancel" onClick={(e) => setShow(false)}>Cancel</button>
                    </div> 
                </form>   
            </div> 
    )
}

export default Created