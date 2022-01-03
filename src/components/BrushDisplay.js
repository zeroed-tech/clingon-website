import React from 'react'
import styles from '../css/brushDisplay.module.css'
import '../css/general.css'
import ProductContainer from './ProductContainer'
import SideBar from './SideBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function BrushDisplay({brush, textAlignment = 'left'}) {
    return (
        <Container>
            <Row>
        
            <Col lg={{span: 9}} md={{ span: 12 }} className='col-left'>
                    {brush.title}
                    <hr/>
                    <p>{brush.description}</p>
                    <hr/>
                    <Row>
                        <Col className='col-left'>
                            {textAlignment == 'left' && <p className={`${styles.brushWriteUp} ${styles.left}`}>{brush.writeUp}</p>}
                            {textAlignment == 'right' && <img src={brush.image} />}
                        </Col>
                        <Col className='col-left'>
                            {textAlignment == 'right' && <p className={`${styles.brushWriteUp} ${styles.right}`}>{brush.writeUp}</p>}
                            {textAlignment == 'left' && <img src={brush.image} />}

                        </Col>
                    </Row>

                </Col>
                <Col lg={{ order: 'last' }} xs={{ order: 'first' }} className='col-right'>
                    <SideBar />
                </Col>

            </Row>

        </Container>
    )
}