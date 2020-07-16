import {useState} from 'react'

const useInput = () => {
    const [value, setValue] = useState('')
    return {
        bind:  {
            value: value,
            onChange: event => setValue(event.target.value)
        }
    }
}

export default useInput