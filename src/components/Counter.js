import React, { Component } from 'react'
import AddButton from './AddButton'
import ResetButton from './ResetButton'
import SubButton from './SubButton'

export default class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    handleClick1() {
        let count = this.state.count + 1

        this.setState({
            count: count
        })
    }

    handleClick2() {
        let count = this.state.count - 1

        if (count < 0) return

        this.setState({
            count: count
        })
    }

    handleClick3() {
        this.setState({
            count: 0
        })
    }

    render() {
        return (
            <div>
                {this.state.count}
                <br />
                <SubButton onClick={() => this.handleClick2()} />
                <AddButton onClick={() => this.handleClick1()} />
                <ResetButton onClick={() => this.handleClick3()} />
            </div>
        )
    }
}
