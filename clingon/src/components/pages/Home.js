import React from 'react'
import styles from '../../css/home.module.css'
import globalStyles from '../../Assets/global-styles/bootstrap.min.module.css'
import cx from 'classnames'
import '../../css/general.css'
import SideBar from '../SideBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
export default function Home() {
    return (

        <Container>
            <Row>

                <Col lg={{span: 9}} md={{ span: 12 }} className='col-left'>
                    <h1>CLING ON!</h1><hr />
                    <img className='pictureFormat sizeFix' src='https://image.jimcdn.com/app/cms/image/transf/dimension=640x10000:format=jpg/path/s03fb617b319ccf37/image/ied80071d26fb1637/version/1623612311/image.jpg' />
                    <hr />
                    <img className='pictureFormat sizeFix' src='https://image.jimcdn.com/app/cms/image/transf/dimension=379x10000:format=png/path/s03fb617b319ccf37/image/i578be7a21326f360/version/1603516094/image.png' />
                    <hr />
                    <h1>ABOUT CLING ON!</h1>
                    <Row>
                        <Col className='col-left'>
                            <hr />
                            <img className='pictureFormat sizeFix' src='https://image.jimcdn.com/app/cms/image/transf/dimension=313x10000:format=jpg/path/s03fb617b319ccf37/image/ic4f14c787fb4c7c4/version/1603516035/image.jpg' />
                        </Col>
                        <Col className='col-right'>
                            <hr />
                            <p><b>CLING ON!</b> is the youngest paintbrush in The Netherlands, yet filled with decades of experience.</p>
                            <p><b>Designed,</b> not by marketeers in a suit, but by a Dutch painter, actually on the job on a daily basis, knowing what a paintbrush should do and what it should feel like.</p>
                            <p><b>Handmade</b> for use with waterbased products, the Cling On! brush can in fact handle any kind of paint and will give you a flawless result, making painting no less than a joy.</p>
                            <p><b>Discovered</b> by furniture painters the Cling On!’s are now the favourites of vintage lovers and furniture flippers, spreading around the world!</p>
                            <p><b>Changing</b> the past, working the present, fit for the future…. Check ‘em out!!</p>
                        </Col>
                    </Row>
                </Col>
                    <SideBar />

            </Row>

        </Container>)
}