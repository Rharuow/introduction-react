import React from 'react'
import Member from './Member'

export default (props) => (
    <div>
        <Member name="Arthur" lastName={ props.name }/>
        <Member name="Clara" lastName={ props.name }/>
        <Member name="Harysson" lastName={ props.name }/>
        <Member name="Rafael" lastName={ props.name }/>
    </div>
)