import React, { Component } from 'react'

export default class Counter extends Component {
    
    plus () {
        this.props.value++
    }

    render() {
        return (
            <div>
                <h1>Value: {this.props.value}</h1>
                <button onClick={this.plus}>Inc</button>
                <button>Dec</button>
            </div>
        )
    }
}