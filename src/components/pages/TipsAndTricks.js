import React from 'react'
import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import '../../css/general.css'
import GreenBar from '../GreenBar'
import TipsAndTricksImage from './../../Assets/images/Tips&TricksPage.jpg'
import SideBar from '../SideBar';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function TipsAndTricks() {

    return (
        <Container>
            <Row>
            <Col lg={{span: 9}} md={{ span: 12 }} className='col-left tips-and-tricks'>
                    <h1>TIPS & TRICKS!</h1>
                    <hr />
                    <p>* Don't remove the string! The string helps maintain the shape for oval and round brushes</p>
                    <hr />
                    <p>* Let your Cling On absorb some water before using it. Give it a few flicks to remove excess water, and you’re ready to roll.</p>
                    <hr />
                    <p>* Don't dip the full length of your bristles into your paint, halfway is plenty.</p>
                    <hr />
                    <p>* Between coats you can wrap your Cling On in some plastic wrap or tin foil. Once you're finished your project, rinse the excess paint from your brush under running water. Then sit your brush in a glass or jar with water halfway up the bristles and watch the paint just wick away. Change the water every 2 days.</p>
                    <hr />
                    <p>* If you won't be painting for a while, wash your brush well with a quality brush soap and hang to dry before storing.</p>
                    <hr />
                    <p>* In warmer weather (especially outdoors) the paint on your brush will dry quickly. Dipping your brush in water every now and then will keep your brush supple and prevent paint buildup.</p>
                    <hr />
                    <p>* Get your paint on quickly, then holding your brush at a 45° angle use just the tips of your Cling On and almost zero pressure to lay your paint all in the one direction…. then step away and leave your paint to self level. Over brushing paint as it starts to dry creates texture and results in brush strokes.</p>
                    <img className='pictureFormat sizeFix' src={TipsAndTricksImage} />
                </Col>
                <Col className='col-right'>
                    <SideBar />
                    <GreenBar />
                </Col>
            </Row>
        </Container>
    )
}