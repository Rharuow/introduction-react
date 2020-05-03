import React, { Component } from 'react'

export default class Counter extends Component {

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

    plus = () => {
        console.log(this)
        // this.props.value++
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