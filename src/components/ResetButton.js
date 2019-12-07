import React, { Component } from 'react'
import {
    Button
} from 'react-bootstrap'

export default class ResetButton extends Component {
    render() {
        return (
            <Button
                variant="info"
                size="lg"
                block={true}
                onClick={this.props.onClick}
            >
                Reset
            </Button>
        )
    }
}
