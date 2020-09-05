import {useState, useCallback} from 'react'

const useSendData = () => {
    const [loading, setLoading] = useState(false)

    const sendData = useCallback(async(url) => {
        setLoading(true)

        try {
            const response = await fetch(url, {method: 'POST'})
        
            if(!response.ok) {
                throw new Error(response.statusText || 'Something wrong')
            }

            setLoading(false)       
            return response
        } catch (e) {
            setLoading(false)
            throw e
        }
    }, [])
    return {loading, sendData}
}

export default useSendData