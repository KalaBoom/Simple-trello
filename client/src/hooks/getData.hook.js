import {useState, useCallback} from 'react'

const useGetData = () => {
    const [loading, setLoading] = useState(false)

    const getData = useCallback(async (url) => {
        
        
        setLoading(true)
        try {
            const response = await fetch(`${url}`)
            if(!response.ok) throw new Error('Bad request')
 
            setLoading(false)
            return await response.json()
        } catch (e) {
            setLoading(false)
            throw e
        }
    }, [])
    return {loading, getData}
}

export default useGetData