import React, { useContext } from 'react'
import UserContext from '../store/user'
export default function BlogPage() {
    const dispatch = UserContext(useContext)
    console.log(dispatch.props.value.user.name)
    console.log(dispatch.props.value.user.job)
    return (
        <div>
            <h1>BlogPage</h1>
            <button onClick={() => {
                dispatch.props.value.dispatch({ type: 'changeJob', text: 'BE-developer' })
            }}>changeJob</button>
        </div>
    )
}
