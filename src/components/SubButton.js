import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

export default class SubButton extends Component {
    render() {
        return (
            <Button variant="info" size="lg" block onClick={this.props.onClick}>
                -
            </Button>
        )
    }
}
