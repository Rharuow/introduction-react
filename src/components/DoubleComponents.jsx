import React from 'react'

const CompA = (props) => <h1>{props.value}</h1>

const CompB = (props) => <h1>{props.value}</h1>

// OBS: Is not possible export Unamed function

// export const CompA = (props) => <h1>{props.value}</h1>

// export const CompB = (props) => <h1>{props.value}</h1>

export default CompA

export { CompA, CompB }