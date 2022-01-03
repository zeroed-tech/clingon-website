import React from 'react'
import '../../css/general.css'
import SideBar from '../SideBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import GreenBar from '../GreenBar'

export default function BecomeRetailer() {
    return (
        <Container>
            <Row>
                <Col lg={{ span: 9 }} md={{ span: 12 }} className='col-left'>
                    <h1>WANT TO BECOME A CLING ON! RETAILER?</h1>
                    <hr />
                    <img className='pictureFormat sizeFix' src='https://image.jimcdn.com/app/cms/image/transf/dimension=640x10000:format=jpg/path/s03fb617b319ccf37/image/i87debb7faf10de40/version/1623613231/image.jpg' />
                    <p >Please send an email to: <a className="email" href="MAILTO:clingonbrushesustralia@gmail.com">clingonbrushesaustralia@gmail.com</a></p>
                    <hr />
                    <img className='pictureFormat sizeFix' src='https://image.jimcdn.com/app/cms/image/transf/dimension=640x10000:format=jpg/path/s03fb617b319ccf37/image/i5466027855b84861/version/1603612761/image.jpg' />
                </Col>
                <Col lg={{ span: 3 }} className="col-right">
                    <SideBar />
                    <GreenBar />
                </Col>
            </Row>
        </Container>
    )
}