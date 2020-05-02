import React from 'react'
import ReactDOM from 'react-dom'
// import First from './components/FirstComponent'
// import A, { CompB as B } from './components/DoubleComponents'
// import MultiElements from './components/MultipleElements'
// import Family from './components/Family'
// import Member from './components/Member'
// import CompWithFunction from './components/CompWithFunction'
// import FatherComponent from './components/Daddy'
import ComponentClass from './components/ComponentClass'

const el = document.getElementById('root')

ReactDOM.render(
    <div>
        <ComponentClass value="It's value from props"/>
    </div>,
el)
