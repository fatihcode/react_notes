import React, { useState, useEffect } from 'react'
export default function Counter() {

    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("state değişti");
    }, [count])

    return (
        <div>
            <h3>useState()</h3>

            <div className="border">
                <h3>Counter</h3>

                <h1>{count}</h1>

                <button onClick={() => setCount(count - 1)}>Minus</button>
                <button onClick={() => setCount(count + 1)}>Plus</button>
            </div>
        </div>
    )
}
