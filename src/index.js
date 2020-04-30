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
        <Family>
            <Member name="Arthur" lastName="Silvia"/>
            <Member name="Rafael" lastName="Silvia"/>
            <Member name="Clara" lastName="Silvia"/>
            <Member name="Harysson" lastName="Silvia"/>
        </Family>
    </div>,
el)
