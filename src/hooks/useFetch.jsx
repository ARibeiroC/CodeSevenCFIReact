import { useState, useEffect } from "react"


export function useFetch(url = ''){

    const [data, setData] = useState(null)
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(null)

    const postData = (data, method) => {
        console.log(data)
        const test = JSON.stringify(data)
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
    }
    
    const [loading, setLoading] = useState(false)

    const getAllData = async ()=>{
        setLoading(true)
        const res = await fetch(url)
        const json = await res.json()
        setLoading(false)
        setData(json)

    }

    const findData = (table)=>{
        return
    }

    const postRequest = async ()=>{
        let json
        let fetchOptions = [url, config]

        const res = await fetch(...fetchOptions)
        json = await res.json()
        setCallFetch(json)
        // if (method === "POST"){
            
            
        // }
    }

    useEffect(()=>{
        getAllData()
    }, [url, callFetch])

    useEffect(()=>{
        postRequest()
    }, [config, method, url])

    return {data, postData, loading }
}