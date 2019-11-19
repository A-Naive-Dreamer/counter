import React, { Component } from 'react'
import AddButton from './AddButton'
import ResetButton from './ResetButton'
import SubButton from './SubButton'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
            <Container fluid={true}>
                <Row>
                    <Col xs={{ span: 8 }} className="mx-auto content">
                        <h2 className="text-center text-primary">
                            React Class Component
                        </h2>
                        <h3 className="text-center text-info">
                            Count: {this.state.count}
                        </h3>
                    </Col>
                    <Col xs={{ span: 8 }} className="mx-auto content">
                        <Form>
                            <Form.Group>
                                <SubButton onClick={() => this.handleClick2()} />
                            </Form.Group>
                            <Form.Group>
                                <AddButton onClick={() => this.handleClick1()} />
                            </Form.Group>
                            <Form.Group>
                                <ResetButton onClick={() => this.handleClick3()} />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}
