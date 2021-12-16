import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import SideBar from '../SideBar'
import '../../css/general.css'
import '../../css/contact.module.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
export default function Contact() {
    let [formObject, setFormObject] = useState({})

    function handleSubmit() {

        console.log('Contact info object: ', formObject)
    }
    function handleChange(key, value) {
        setFormObject({
            ...formObject,
            [key]: value
        })
    }
    return (
        <Container>
            <Row>
            <Col lg={{span: 9}} md={{ span: 12 }} className='col-left'>
                    <h1>CONTACT US!</h1>
                    <hr />
                    <Form>

                        <Form.Group className='mb-3'>
                            <Form.Label>Name <span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control name='name' onChange={(e) => handleChange(e.target.name, e.target.value)} type='' />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Email <span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control name='email' onChange={(e) => handleChange(e.target.name, e.target.value)} type='' />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Business Name</Form.Label>
                            <Form.Control name='businessName' onChange={(e) => handleChange(e.target.name, e.target.value)} type='' />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Website Link</Form.Label>
                            <Form.Control name='websiteLink' onChange={(e) => handleChange(e.target.name, e.target.value)} type='' />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Message <span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control name='message' onChange={(e) => handleChange(e.target.name, e.target.value)} as='textarea' />
                        </Form.Group>
                        <Button variant='primary' type='submit' onClick={(e) =>{
                            e.preventDefault()
                            handleSubmit()
                        }}>Submit</Button>
                    </Form>


                    <p><b>Note:</b> Please fill out the fields marked with an asterisk.</p>
                    <hr />
                    <Row>
                        <Col className='col-left'>
                            <img className='pictureFormat sizeFix' src='https://image.jimcdn.com/app/cms/image/transf/dimension=10000x313:format=jpg:rotate=270/path/s03fb617b319ccf37/image/i6aabbac84d75ea5f/version/1603611770/image.jpg' />

                        </Col>
                        <Col className='col-right'>
                            <h4><b>Frank Michielsen, Director</b></h4>
                            <p><br />Address: <br />Office / Warehouse <br />Poortweg 19 <br />4613 BW Bergen op Zoom <br />The Netherlands <br />  <br />Phone: 0031 - 164 - 258 955 <br />Mob: 00316 - 54 73 80 67 <br />  <br />Reg. Nr 75506270 <br />VAT Number: NL8603.06.380.B01 <br />  <br />Email: fm@clingon.nl</p>
                        </Col>

                    </Row>

                </Col>
                    <SideBar />
            </Row>

        </Container>
    )
}