import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export default function ReactDocPage() {
    const params = useParams()
    console.log(params)
    const navigate = useNavigate()
    return (
        <>
            <h5 onClick={() => navigate('/')}>logo</h5>
            <div>
                <h3>ReactDocPage : {params.docId}</h3>
            </div>
        </>
    )
}
