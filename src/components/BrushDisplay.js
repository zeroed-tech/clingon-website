import React from 'react'
import '../css/general.css'
import styles from '../css/brushDisplay.module.css'
import ProductContainer from './ProductContainer'
import SideBar from './SideBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import bentBrushes from '../Assets/images/BentBrushes2Web.jpg'

export default function BrushDisplay({brush, textAlignment = 'left'}) {
    console.log(brush.title.props.children)
    return (
        <Container>
            <Row>
        
            <Col lg={{span: 9}} md={{ span: 12 }} className='col-left'>
                    {brush.title}
                    <hr/>
                    <p className={styles.description}>{brush.description}</p>
                    <hr/>
                    <Row>
                        <Col lg={{span: 6}} className='col-left'>
                            {textAlignment == 'left' && <p className={`${styles.brushWriteUp} ${styles.left}`}>{brush.writeUp}</p>}
                            {textAlignment == 'right' && <img className={`${styles.brushDisplayImage} pictureFormat`} src={brush.title.props.children == '- BENT BRUSHES -' ? bentBrushes : brush.image} />}
                        </Col>
                        <Col lg={{span: 6}} className='col-left'>
                            {textAlignment == 'right' && <p className={`${styles.brushWriteUp} ${styles.right}`}>{brush.writeUp}</p>}
                            {textAlignment == 'left' && <img className={`${styles.brushDisplayImage} pictureFormat`} src={brush.title.props.children == '- BENT BRUSHES -' ? bentBrushes : brush.image} />}

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