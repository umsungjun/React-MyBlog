import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function ReactPage() {

    const [docs, setDocs] = useState([])


    useEffect(() => {
        async function fetchData() {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            // console.log(res)
            const result = await res.json()
            // console.log(result)
            // setDocs(result)
            return result
        }

        fetchData().then(res => {
            setDocs(res)
        })
    }, []) // 한번 실행해야하니까

    return (
        <div>
            {docs.map(doc => (
                <Link style={{ display: 'block', margin: '1rem 0' }} to={`${doc.id}`} key={doc.id}>{doc.title}</Link>
            ))}
        </div>
    )
}
