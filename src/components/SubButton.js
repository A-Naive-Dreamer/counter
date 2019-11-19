import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

export default class SubButton extends Component {
    render() {
        return (
            <Button variant="primary" size="lg" block onClick={this.props.onClick}>
                -
            </Button>
        )
    }
}
