import React, { Component } from 'react'
import {
    Button
} from 'react-bootstrap'

export default class SubButton extends Component {
    render() {
        return (
            <Button
                variant="info"
                size="lg"
                block={true}
                onClick={this.props.onClick}
            >
                -
            </Button>
        )
    }
}
