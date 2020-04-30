import React from 'react'

export default (props) => (
    <div>
        <h1>Família</h1>
        { React.cloneElement(props.children,
            { lastName: props.lastName }    
        ) }
        {/* <h3>{ props.children }</h3> */}
    </div>
)