import React, { useState, useEffect } from 'react'

export default (props) => {

    const [value, setValue] = useState(props.initialValue || 0)
    const [status, setStatus] = useState("Even")

    const sum = () => setValue(value + 1)
    const sub = () => setValue(value - 1)
    const stepValue = (howMuch) => setValue(value + howMuch)

    useEffect( () => {
        setStatus(value % 2 === 0 ? "even" : "odd")
    })

    return (
        <div>
            <h1>Counter: {value}</h1>
            <h3>Status: {status}</h3>
            <button onClick={sum}>Inc</button>
            <button onClick={sub}>Dec</button>
            <button onClick={() => stepValue(10) }>Inc + 10</button>
            <button onClick={() => stepValue(-10) }>Inc - 10</button>
        </div>
    )
}