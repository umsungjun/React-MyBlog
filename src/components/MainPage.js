import React from 'react'
import { Link } from 'react-router-dom'

export default function MainPage() {
    return (
        <div>
            <h1>MainPage</h1>
            <Link to='/blog'>Blog</Link> | <Link to='/tech'>Tech</Link>
            {/* Link와 a태그의 차이는 Link는 새로운 페이지를 불러오는 것 이 아님 */}
        </div>
    )
}
