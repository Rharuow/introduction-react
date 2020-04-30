import React from 'react'

let isCool = true

export default (props) => 
    <div>
        <h1>{props.value}</h1>
        <h2>is cool ? {isCool ? "Yes" : "No"}</h2>
        <p>{Math.random()}</p>
    </div>



// export default (props) => 
//     <div>
//         <h1>Primeiro Component (Arrow function)</h1>
//     </div>

// function first() {
//     return <h1>Primeiro Component!</h1>
// }

// export default function() {
//     return <h1>Primeiro Component! (Unamed function)</h1>
// }

// export default first