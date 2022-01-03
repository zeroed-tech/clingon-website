import React from 'react'

import '../../css/general.css'
import styles from '../../css/home.module.css'

import GreenBar from '../GreenBar'
import SideBar from '../SideBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Home() {
    return (

        <Container>
            <Row>

                <Col lg={{ span: 9 }} md={{ span: 12 }} className='col-left'>
                    <h1><i>CLING ON!</i></h1><hr />
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
                            <div className={styles.homePageDescriptions}>
                                <p><b>CLING ON!</b> is the youngest paintbrush in The Netherlands, yet filled with decades of experience.</p>
                                <p><b>Designed</b> by a Dutch painter on the job on a daily basis, with the expertise & experience to know what a paintbrush should do and what it should feel like.</p>
                                <p><b>Handmade</b> for use with waterbased products, the CLING ON! brush can handle any kind of paint and will give you a flawless result, making painting no less than a joy.</p>
                                <p><b>Discovered</b> by furniture painters, the CLING ON!'s are now a favourite of DIY lovers and furniture flippers around the world.</p>
                                <p><b>CLING ON! Brushes</b> make it possible even for a beginner to achieve an expert finish!</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col lg={{ span: 3}} className="col-right">
                <SideBar />
                <GreenBar />
                </Col>
                

            </Row>

        </Container>)
}