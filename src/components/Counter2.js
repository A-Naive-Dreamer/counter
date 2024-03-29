import React from 'react'
import {
    Col,
    Row,
    Button,
    Form,
    Container
} from 'react-bootstrap'

function AddButton(props) {
    return (
        <Button
            size="lg"
            variant="success"
            block={true}
            onClick={props.onClick}
        >
            +
        </Button>
    )
}

function SubButton(props) {
    return (
        <Button
            size="lg"
            variant="success"
            block={true}
            onClick={props.onClick}
        >
            -
        </Button>
    )
}

function ResetButton(props) {
    return (
        <Button
            size="lg"
            variant="success"
            block={true}
            onClick={props.onClick}
        >
            Reset
        </Button>
    )
}

export default function Counter2() {
    let [
        state,
        setstate
    ] = React.useState({ count: 0 }),
        handleClick1 = function () {
            setstate({
                count: state.count + 1
            })
        },
        handleClick2 = function () {
            if (state.count < 1) return

            setstate({
                count: state.count - 1
            })
        },
        handleClick3 = function () {
            setstate({
                count: 0
            })
        }

    return (
        <Container fluid={true}>
            <Row>
                <Col
                    xs={{
                        span: 8
                    }}
                    className="mx-auto content"
                >
                    <h2 className="text-center text-primary">
                        React Function Component
                    </h2>
                    <h3 className="text-center text-success">
                        Count: {state.count}
                    </h3>
                </Col>
                <Col
                    xs={{
                        span: 8
                    }}
                    className="mx-auto content"
                >
                    <Form>
                        <Form.Group>
                            <SubButton onClick={() => handleClick2()} />
                        </Form.Group>
                        <Form.Group>
                            <AddButton onClick={() => handleClick1()} />
                        </Form.Group>
                        <Form.Group>
                            <ResetButton onClick={() => handleClick3()} />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
