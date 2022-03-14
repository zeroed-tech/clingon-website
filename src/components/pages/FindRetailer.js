import React from 'react'
import GreenBar from '../GreenBar'

import '../../css/general.css'
import SideBar from '../SideBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import insta1 from '../../Assets/images/Inst1.jpg'
import insta2 from '../../Assets/images/Insta2.jpg'
import insta3 from '../../Assets/images/Insta3.jpg'
import insta4 from '../../Assets/images/Insta4.jpg'
import insta5 from '../../Assets/images/Insta5.jpg'
import insta6 from '../../Assets/images/Insta6.jpg'
import insta7 from '../../Assets/images/Insta7.jpg'
import insta8 from '../../Assets/images/Insta8.jpg'
import insta9 from '../../Assets/images/Insta9.jpg'
import insta10 from '../../Assets/images/Insta10.jpg'
import insta11 from '../../Assets/images/Insta11.jpg'
import insta12 from '../../Assets/images/Insta12.jpg'


export default function FindRetailer() {
    return (
        <Container>
            <Row>
            <Col lg={{span: 9}} md={{ span: 12 }} className='col-left'>
                    <h1>WHERE TO BUY!</h1>
                    <hr />
                    <p>Want to know if there is a retailer nearby? Zoom in to your town and check it out!</p>
                    
                    <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1NO5N6pIVCqxPOW1gAXnTC2_pAvi48wNQ&ehbc=2E312F" width="640" height="480"></iframe>
                    <hr />
                    <h3>We’d love you to follow us on Instagram! #clingonaustralia</h3>
                    <p>MAKE SURE YOU TAG US, SO WE CAN SEE YOUR PROJECTS PAINTED WITH ONE OF OUR BRUSHES! <br />WE LOVE TO SHARE OUR CUSTOMERS WORK!</p>
                    <hr />
                    <Row>
                        <Col>
                        <img src={insta1} style={{width: '33.1%', padding: "0.5%", display: 'inline-block', position: 'relative',margin: '0 auto'}}/>
                        <img src={insta2} style={{width: '33.1%', padding: "0.5%", display: 'inline-block', position: 'relative',margin: '0 auto'}}/>
                        <img src={insta3} style={{width: '33.1%', padding: "0.5%", display: 'inline-block', position: 'relative',margin: '0 auto'}}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <img src={insta4} style={{width: '33.1%', padding: "0.5%", display: 'inline-block', position: 'relative',margin: '0 auto'}}/>
                        <img src={insta5} style={{width: '33.1%', padding: "0.5%", display: 'inline-block', position: 'relative',margin: '0 auto'}}/>
                        <img src={insta6} style={{width: '33.1%', padding: "0.5%", display: 'inline-block', position: 'relative',margin: '0 auto'}}/>
                        
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <img src={insta7} style={{width: '33.1%', padding: "0.5%", display: 'inline-block', position: 'relative',margin: '0 auto'}}/>
                        <img src={insta8} style={{width: '33.1%', padding: "0.5%", display: 'inline-block', position: 'relative',margin: '0 auto'}}/>
                        <img src={insta9} style={{width: '33.1%', padding: "0.5%", display: 'inline-block', position: 'relative',margin: '0 auto'}}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <img src={insta10} style={{width: '33.1%', padding: "0.5%", display: 'inline-block', position: 'relative',margin: '0 auto'}}/>
                        <img src={insta11} style={{width: '33.1%', padding: "0.5%", display: 'inline-block', position: 'relative',margin: '0 auto'}}/>
                        <img src={insta12} style={{width: '33.1%', padding: "0.5%", display: 'inline-block', position: 'relative',margin: '0 auto'}}/>
                        </Col>
                    </Row>
                </Col>
                <Col lg={{ span: 3}} className="col-right">
                    <SideBar />
                    <GreenBar />
                    </Col>

            </Row>
        </Container>
    )
}