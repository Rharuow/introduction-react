import React from 'react'


export default props => {
    const approved = ["Harysson", "Rafael", "Clara", "Arthur"]

    const elementGenerator = elements => elements.map(element => <li>{element}</li>)

    return (
        <ul>
            {elementGenerator(approved)}
        </ul>
    )

}