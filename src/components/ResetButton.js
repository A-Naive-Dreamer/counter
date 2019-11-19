import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

export default class ResetButton extends Component {
    render() {
        return (
            <Button variant="primary" size="lg" block onClick={this.props.onClick}>
                Reset
            </Button>
        )
    }
}
