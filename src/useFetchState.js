import { useState, useEffect } from "react";
const useFetchState = (url) => {
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null);
    const [data, setBlogs] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController()
        setIsPending(true)
        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
            .then(res => {
                if(!res.ok) throw new Error("could not fetch this resource")
                return res.json()
            })
            .then(data => {
                setBlogs(data)
                setError("")
                setIsPending(false)
            })
            .catch(err => {
                if(err.name !== "AbortError") {
                    setError(err.message)
                    setIsPending(false)
                }
            })
        }, 3000)

        return () => abortCont.abort();
    }, [url])

    return {
        data,
        isPending,
        error
    }
}
export default useFetchState