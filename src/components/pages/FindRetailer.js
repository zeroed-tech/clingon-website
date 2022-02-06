import React from 'react'
import GreenBar from '../GreenBar'

import '../../css/general.css'
import SideBar from '../SideBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
export default function FindRetailer() {
    return (
        <Container>
            <Row>
            <Col lg={{span: 9}} md={{ span: 12 }} className='col-left'>
                    <h1>WHERE TO BUY!</h1>
                    <hr />
                    <a href='https://www.google.com/maps/d/u/0/viewer?mid=1V649ghlK5IEWV9AEtpoM1lf7zG3wI6MJ&hl=en&ll=-35.071140628937314%2C130.64671945000006&z=5'><button className='find-local-retailer-btn'>Find a local retailer</button></a>
                    
                    <hr />
                    
                    <p>Want to know if there is a retailer nearby? Zoom in to your town and check it out!</p>
                    
                    <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1NO5N6pIVCqxPOW1gAXnTC2_pAvi48wNQ&ehbc=2E312F" width="640" height="480"></iframe>
                    <hr />
                    <h3>We’d love you to follow us on Instagram! #clingonbrushesaustralia</h3>
                    <p>MAKE SURE YOU TAG US, SO WE CAN SEE YOUR PROJECTS PAINTED WITH ONE OF OUR BRUSHES! <br />WE LOVE TO SHARE OUR CUSTOMERS WORK!</p>
                    <hr />
                </Col>
                <Col lg={{ span: 3}} className="col-right">
                    <SideBar />
                    <GreenBar />
                    </Col>

            </Row>
        </Container>
    )
}