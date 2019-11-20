import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { MyCustomContext } from '../Context'

class Preferences extends React.Component {

    static contextType = MyCustomContext;

    constructor() {
        super()
        // set component state
        this.state = {
            firstName: "",
            lastName: ""
        }
    }

    // Lifecycle hook  -> console log context value
    componentDidMount() {
        console.log(this.context);
    }

    // input change handler
    changeHandler = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col>Value for context</Col>
                    <Col>{this.context}</Col>
                </Row>
                <Row>
                    <Col>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Control placeholder="First name" name="firstName" onChange={this.changeHandler} value={this.state.firstName} />
                                </Col>
                                <Col>
                                    <Form.Control placeholder="Last name" name="lastName"  onChange={this.changeHandler} value={this.state.lastName}  />
                                </Col>
                            </Row>
                        </Form>

                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Preferences;

