import { useState, useEffect } from "react";
const useFetchState = (url) => {
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)
    const [data, setBlogs] = useState(null)

    useEffect(() => {
        setIsPending(true)
        setTimeout(() => {
            fetch(url)
            .then(res => {
                if(!res.ok) throw new Error("could not fetch this resource")
                return res.json()
            })
            .then(data => {
                setBlogs(data)
                setError("")
            })
            .catch(err => {
                setError(err.message)
            })
            .finally(() => setIsPending(false))
        }, 3000)
    }, [])

    return {
        data,
        isPending,
        error
    }
}
export default useFetchState