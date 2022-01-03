import React from 'react'
import "../css/general.css"
import styles from "../css/greenBar.module.css"
import FacebookBTN from "../Assets/images/facebookBTN.png"
import EmailBTN from "../Assets/images/emailBTN.png"
import InstagramBTN from "../Assets/images/instagramBTN.png"
import Button from 'react-bootstrap/esm/Button'
import { Container, Col, Row } from 'react-bootstrap'

export default function GreenBar() {

    return (
        <Container>

            <div className={styles.greenBar}>
                <Row>
                    <Col lg={{ span: 12, offset: 0 }} xs={{ span: 12, offset: 0 }}>
                        <h2><span className={styles.bigLetter}>L</span>ET'S GET IN TOUCH</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <div className={styles.imageContainer}>
                            <Row>
                                <Col lg={{ span: 4, offset:0 }} xs={{ span: 6, offset: 3 }}>
                                    <a href="https://www.facebook.com/clingonaustralia"><img className={styles.image} src={FacebookBTN} alt="CLING ON! Facebook" /></a>
                                </Col>

                                <Col lg={{ span: 4, offset: 0 }} xs={{ span: 6, offset: 3 }}>
                                <a href="mailto:clingonaustralia@gmail.com"><img className={styles.image} src={EmailBTN} alt="CLING ON! Email" /></a>
                                </Col>

                                <Col lg={{ span: 4, offset: 0 }} xs={{ span: 6, offset: 3 }}>
                                   <a href="https://www.instagram.com/clingonaustralia/"><img className={styles.image} src={InstagramBTN} alt="CLING ON! Instagram" /></a>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <button className={styles.Button}><a href="mailto:clingonaustralia@gmail.com">SEND US A MESSAGE!</a></button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>KEEP CALM AND PAINT ON!</h2>
                        <img className={styles.image} src="https://image.jimcdn.com/app/cms/image/transf/dimension=221x10000:format=jpg/path/s03fb617b319ccf37/image/ia0dbfe6d95ef962d/version/1603612833/image.jpg" alt="Paint brushes" />
                        <h2>YOURS FOR YEARS... EXTREMELY DURABLE!</h2>
                        <img className={styles.image} src="https://image.jimcdn.com/app/cms/image/transf/dimension=250x10000:format=jpg/path/s03fb617b319ccf37/image/ie3fb3861a08affab/version/1603615468/image.jpg" alt="Collage of CLING ON!'s" />
                        <h2>USE <span className={styles.hashtag}>#clingonbrushesaustralia</span> ON YOUR INSTAGRAM! WE LOVE TO SEE YOUR WORK DONE WITH ONE OF OUR BRUSHES.</h2>
                        <h2>Have you tried our popular Shorties yet? The S50 and S30 are hugely popular all over the world!</h2>
                    </Col>
                </Row>
            </div>

        </Container >


    )
}