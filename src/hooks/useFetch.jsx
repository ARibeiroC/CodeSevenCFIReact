import { useState, useEffect } from "react"


export function useFetch(url){
    
    const [data, setData] = useState(null)
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(null)
    const [loading, setLoading] = useState(false)

    const getAllData = async ()=>{
        if (method === null){
            setLoading(true)
            const res = await fetch(url)
            const json = await res.json()
            setLoading(false)
            setData(json)
        }
    }

    const postData = (data, method) => {
        if (method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            setMethod(method)
        }
        return console.log('Usuário adicionado com êxito!')
    }

    const postRequest = async ()=>{
        let json
        let fetchOptions = [url, config]
        setLoading(true)
        if (method !== null){
            const res = await fetch(...fetchOptions)
            json = await res.json()
            setCallFetch(json)
        }
        setLoading(false)
    }

    useEffect(()=>{
        getAllData()
    }, [url, callFetch])

    useEffect(()=>{
        postRequest()
    }, [config])

    return {data, postData, loading }
}