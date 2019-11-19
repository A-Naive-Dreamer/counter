import React, { Component } from 'react'

export default class SubButton extends Component {
    render() {
        return (
            <button type="button" onClick={this.props.onClick}>
                -
            </button>
        )
    }
}
