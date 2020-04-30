import React from 'react'
import ReactDOM from 'react-dom'
import First from './components/FirstComponent'

const el = document.getElementById('root')

ReactDOM.render(
    <div>
        <First value="Primeiro Component (from props)"/>
    </div>,
el)
