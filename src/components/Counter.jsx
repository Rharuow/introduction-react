import React, { Component } from 'react'

export default class Counter extends Component {

    state = {
        number: 0
    }

    sum = () => {
        this.alterNumber(1)
    }

    sub = () => {
        this.alterNumber(-1)
    }

    alterNumber = (value) => {
        this.setState({
            number: this.state.number + value
        })
    }

    render() {
        return (
            <div>
                <h1>Value: {this.state.number}</h1>
                <button onClick={this.sum}>Inc</button>
                <button onClick={this.sub}>Dec</button>
                <button onClick={() => this.alterNumber(10)}>Inc 10</button>
                <button onClick={() => this.alterNumber(-10)}>Dec 10</button>
            </div>
        )
    }
}


// solution 1
// constructor(props) {
//     super(props)
//     this.plus = this.plus.bind(this)
// }

// solution 2
// <button onClick={() => this.plus()}>Inc</button>

// solution 3
// plus = () => {
//     console.log(this)
//     // this.props.value++
// }