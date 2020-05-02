import React from 'react'
import Son from './Son'

export default props => {
    const notificationDaddy = message => alert(`This message "${message}" came from son!`)
    
    return <Son notificationFromDaddy={notificationDaddy} />
}