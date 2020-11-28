import React, { useState } from 'react'

export default function Home() {
    return (
        <>
            <h1>HOME</h1>
            <Contador />
        </>
    )
}

function Contador() {
    const [count, setCount] = useState(0)
    
    const counter = () => {
        setCount(count + 1)
    }
    
    return (
        <div>
            <div>{count}</div>
            <button onClick={counter}>Contar</button>
        </div>
    )
}

