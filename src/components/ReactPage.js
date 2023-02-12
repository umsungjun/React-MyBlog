import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function ReactPage() {

    const docs = [
        {
            id: 1,
            title: 'React를 공부를 시작하면서1',
            date: '05/01/2021 1'
        },
        {
            id: 2,
            title: 'React를 공부를 시작하면서2',
            date: '05/01/2021 2'
        },
        {
            id: 3,
            title: 'React를 공부를 시작하면서3',
            date: '05/01/2021 3'
        },
        {
            id: 4,
            title: 'React를 공부를 시작하면서4',
            date: '05/01/2021 4'
        },
        {
            id: 5,
            title: 'React를 공부를 시작하면서5',
            date: '05/01/2021 5'
        },
    ]

    return (
        <div>
            {docs.map(doc => (
                <Link to={`${doc.id}`} key={doc.id}>{doc.title} <br /></Link>
            ))}
        </div>
    )
}
