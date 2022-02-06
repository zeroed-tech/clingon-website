import React from 'react'
import '../../css/general.css'
import SideBar from '../SideBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import GreenBar from '../GreenBar'
import YellowPiano from './../../Assets/images/YellowPiano.jpg'
import GreenBrush from './../../Assets/images/GreenBrush.jpg'

export default function BecomeRetailer() {
    return (
        <Container>
            <Row>
                <Col lg={{ span: 9 }} md={{ span: 12 }} className='col-left'>
                    <h1>WANT TO BECOME A CLING ON! RETAILER?</h1>
                    <hr />
                    <img className='pictureFormat sizeFix' src={YellowPiano} />
                    <p >Please send an email to: <a className="email" href="MAILTO:clingonbrushesustralia@gmail.com">clingonbrushesaustralia@gmail.com</a></p>
                    <hr />
                    <img className='pictureFormat sizeFix' src={GreenBrush} />
                </Col>
                <Col lg={{ span: 3 }} className="col-right">
                    <SideBar />
                    <GreenBar />
                </Col>
            </Row>
        </Container>
    )
}