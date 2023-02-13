import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import axios from 'axios'
import useSWR from 'swr'

export default function ReactPage() {

    const [number, setNumber] = useState(0)

    async function fetcher() {
        const result = await axios.get('https://jsonplaceholder.typicode.com/posts')
        return result.data

    }
    const { data: docs, error } = useSWR('posts', fetcher)
    console.log(docs)
    // useEffect(() => {
    //     async function fetchData() {
    //         const result = await axios.get('https://jsonplaceholder.typicode.com/posts')
    //         // console.log(res)
    //         // const result = await res.json()
    //         // console.log(result)
    //         // setDocs(result)
    //         console.log(result)
    //         console.log(result.data)
    //         return result.data
    //     }

    //     fetchData().then(res => {
    //         setDocs(res)
    //     })
    // }, []) // 한번 실행해야하니까
    if (error) return <div>Faild to load</div>
    if (!docs) return <div>loading...</div>

    return (
        <div>
            <button onClick={() => {
                setNumber(number + 1)
            }}>{number}</button>
            {docs.map(doc => (
                <Link style={{ display: 'block', margin: '1rem 0' }} to={`${doc.id}`} key={doc.id} >{doc.title}</Link>
            ))}
        </div>
    )
}
