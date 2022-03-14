import React, { useState } from 'react'

import Button from 'react-bootstrap/Button'
import { useHistory } from "react-router-dom";
import '../../css/general.css'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
  } from "react-router-dom";
import '../../css/general.css'

export default function PasswordReset({ handleLogin }) {
    let [oldPassword, setOldPassword] = useState('')
    let [userName, setUserName] = useState('')
    let [newPassword, setNewPassword] = useState('')
    let [error, setError] = useState(false)
    let history = useHistory();

    let handleSubmit = () => {
        fetch('https://clingonaustralia.com.au/login', {
            method: 'POST',
            header: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                'username': userName,
                'password': oldPassword
            })
        })
            .then(resp => resp.json())
            .then(data => {
                data.success ? successfulLogin() : setError(true)
                data.success ? handleLogin(userName) : setError(true)
            
            })
            .catch(err => setError(true))
    }
    function successfulLogin() {
        history.push("/store")
    }
    return (
        <Container>
            <Row className="justify-content-md-center">
                <div id='login-container'>
                    <h3>Stockist Login</h3>
                    {error && <Alert className='alert' variant='danger'>
                        Username or password were incorrect, please try again.
                    </Alert>}
                    <Col sm={{ span: 4, offset: 4 }}>

                        <Form>

                            <Form.Group className="mb-3" controlId="formPlaintextEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control onChange={(e) => setUserName(e.target.value)} type="text" placeholder="Username" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label>Old password</Form.Label>
                                <Form.Control onChange={(e) => setOldPassword(e.target.value)} type="password" placeholder="Old Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formPlainTextNewPassword">
                                <Form.Label>New password</Form.Label>
                                <Form.Control onChange={(e) => setNewPassword(e.target.value)} type="password" placeholder="New Password" />
                            </Form.Group>
                            <Button variant="primary" type='submit' onClick={(e) => {
                                e.preventDefault()
                                handleSubmit()
                            }}>Submit</Button>{' '}
                            <NavLink to='/login'><Button>Back</Button></NavLink>
                        </Form>

                    </Col>
                </div>

            </Row>
        </Container>
    )
}