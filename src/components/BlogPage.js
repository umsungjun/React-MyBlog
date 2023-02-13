import React, { useContext } from 'react'
import UserContext from '../store/user'
export default function BlogPage() {
    const dispatch = UserContext(useContext)
    console.log(dispatch.props)
    return (
        <div>
            <h1>BlogPage</h1>
            <button onClick={() => {
                dispatch.props.value({ type: 'changeJob', text: 'BE-developer' })
            }}>changeJob</button>
        </div>
    )
}
