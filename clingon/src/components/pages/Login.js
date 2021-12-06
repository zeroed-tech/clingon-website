import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import '../../css/general.css'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import '../../css/general.css'

export default function Login() {
    let [password, setPassword] = useState('')
    let [email, setEmail] = useState('')
    let handleSubmit = () => {
        fetch('http://clingonaustralia.com.au/login', {
            method: 'POST',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'email': email,
                'password': password
            })
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
        .catch(err => console.error(err))
    }
    return (
        <Container>
            <Row className="justify-content-md-center">
                <div id='login-container'>
                    <h3>Stockist Login</h3>
                    <Col sm={{span: 4, offset: 4}}>

                        <Form>

                            <Form.Group className="mb-3" controlId="formPlaintextEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="example@example.com" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" onClick={(e) => {
                                e.preventDefault()
                                handleSubmit()
                            }}>Login</Button>{' '}
                        </Form>

                    </Col>
                </div>

            </Row>
        </Container>
    )
}