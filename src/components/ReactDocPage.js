import React from 'react'
import { useParams } from 'react-router-dom'

export default function ReactDocPage() {
    const params = useParams()
    console.log(params)
    return (
        <div>
            <h3>ReactDocPage : {params.docId}</h3>
        </div>
    )
}
