import React from 'react'
import { Outlet, Link } from 'react-router-dom'
export default function TechPage() {
    return (
        <>
            <div>
                <h1>TechPage</h1>
                <Link to='javascript'>Javascript</Link> | <Link to='react'>React</Link>
            </div>
            <Outlet />
        </>
    )
}
