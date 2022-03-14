import React from 'react'
import Button from 'react-bootstrap/Button'
import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import SideBar from '../SideBar';
import GreenBar from '../GreenBar'
import '../../css/general.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function WhyCustomersLoveClingOn() {
    return (
        <Container>
            <Row>
                <Col lg={{ span: 9 }} md={{ span: 12 }} className='col-left'>
                    <h1>WHY CLING ON!?</h1>
                    <hr />
                    <p>Cling On! brushes are the favorite brush among <b>furniture painters.</b>They offer superior application, <b>no shedding</b>, and smooth flawless finishing. Featuring premium <b>synthetic filaments</b>, beech wood painted handle, <b>fully locked in epoxy</b> cement to eliminate shedding, and a <b>stainless steel ferrule</b>.  Handmade in Holland, Cling On! is designed for all waterborne materials. Brushes are available in round, oval, flat, block and angled styles.</p>
                    <h1>WHY OUR CUSTOMERS LOVE CLING ON!?</h1>
                    <hr />
                    <div id="quote-box">
                        <blockquote>"I love my Cling On! Brushes! Comfortable to use, easy to clean, beautiful finish, and long lasting.. I’ve had mine for years and years… still my go to brush after trying others!"</blockquote> <p class="quote">- Kerryn N</p>
                        <blockquote>"Just bought my first Cling On! brush last week from Painted Love and Wow! I never would have thought that the right brush would make such a difference, it felt light to hold and the paint went on beautifully."</blockquote> <p class="quote">- Julie G</p>
                        <blockquote>"Always loved my Cling Ons since first starting to paint!! Flawless finish, easy to clean and will outlast all the others!!! Love them so much I now retail them"</blockquote><p class="quote">- ❤❤❤❤ Jones and Co Vintage</p>
                        <blockquote>"My first brush bought when I started my painting journey four years ago was a Cling On! O35. I loved it so much that since then I’ve added a few more. They seem to be the right fit for my hand, still great after 4 years. Clean up well, great quality and give a beautiful finish. Just love them!"</blockquote><p class="quote">- ❤️❤️Karen R</p>
                        <blockquote>"I love Cling On! brushes because they are so comfortable and simple to use, without compromising a flawless finish. I’m absolutely addicted and cannot wait to try the new Pointies."</blockquote><p class="quote">- Jessie L</p>
                        <blockquote>"Cling Ons are so easy to clean, comfortable in your hand, they don’t shed bristles and give a nice smooth finish. You get what you pay for with these brushes and that’s quality!"</blockquote><p class="quote">- Debbie B</p>
                        <blockquote>"Comfort is the key! Cling On! brushes are perfect and don’t give you blisters even if you paint for hours."</blockquote><p class="quote">- Sharon A</p>
                        <blockquote>"Once I was introduced to these brushes there was no turning back. They glide along the furniture in perfect sync with my paint. They give a great finish, are easy to clean and they come in a variety of sizes and shapes. Of all the brushes I've used these are by far the best and make all my projects just that little bit better."</blockquote><p class="quote">- Leanne R</p>
                        <blockquote>"Easy to clean and no brush strokes and fibers stay intact. Leaves a smooth silky finish. Easy to hold and so light weight!"</blockquote><p class="quote">- Kirsty M</p>
                    </div>
                </Col>
                <Col className='col-right'>
                    <SideBar />
                    <GreenBar />

                </Col>
            </Row>
        </Container>
    )
}