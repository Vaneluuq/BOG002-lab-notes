import React from 'react'

export default function Home({handleLogout}) {
    return (
        <div>
            <p>Soy el home</p>
            <button onClick= {handleLogout}>Logout</button>
        </div>
    )
}
