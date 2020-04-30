import React from 'react'
import ReactDOM from 'react-dom'
// import First from './components/FirstComponent'
import { CompA, CompB as B } from './components/DoubleComponents'

const el = document.getElementById('root')

ReactDOM.render(
    <div>
        <CompA value="Component A"/>

        <B value="Component B"/>
    </div>,
el)
