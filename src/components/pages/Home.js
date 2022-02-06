import React from 'react'

import '../../css/general.css'
import styles from '../../css/home.module.css'

import GreenBar from '../GreenBar'
import SideBar from '../SideBar'
import Container from 'react-bootstrap/Container'
import HomePageBrushes from './../../Assets/images/HomePageImage.jpg'
import EST2010 from './../../Assets/images/EST2010.png'
import BrushInYellowBag from './../../Assets/images/BrushInYellowBag.jpg'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Home() {
    return (

        <Container>
            <Row>

                <Col lg={{ span: 9 }} md={{ span: 12 }} className='col-left'>
                    <h1><i>CLING ON!</i></h1><hr />
                    <img className='pictureFormat sizeFix' src={HomePageBrushes} alt='Pile of Cling! On brushes'/>
                    <hr />
                    <img className='pictureFormat sizeFix' src={EST2010} alt='Established 2010'/>
                    <hr />
                    <h1>ABOUT CLING ON!</h1>
                    <Row>
                        <Col className='col-left'>
                            <hr />
                            <img className='pictureFormat sizeFix' src={BrushInYellowBag} alt='Brush in yellow bag'/>
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