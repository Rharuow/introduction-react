import React from 'react'
import ReactDOM from 'react-dom'
// import First from './components/FirstComponent'
// import A, { CompB as B } from './components/DoubleComponents'
// import MultiElements from './components/MultipleElements'
import Family from './components/Family'
import Member from './components/Member'

const el = document.getElementById('root')

ReactDOM.render(
    <div>
        <Family lastName="Silvia">
            <Member name="Arthur"/>
            {/* <Member name="Rafael"/>
            <Member name="Clara"/>
            <Member name="Harysson"/> */}
        </Family>
    </div>,
el)
