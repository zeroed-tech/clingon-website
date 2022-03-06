import React, { useState, useEffect } from 'react'
import styles from '../../css/product.module.css'
import globalStyles from '../../Assets/global-styles/bootstrap.min.module.css'
import SideBar from '../SideBar'
import ListGroup from 'react-bootstrap/ListGroup'
import GreenBar from '../GreenBar'
import cx from 'classnames'
import ProductHeadPhoto from './../../Assets/images/Cling-On-Fun-Graphic.jpg'
import { products } from '../../Assets/data'




import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Products() {
    return (
        <Container>

            <Row>

                <Col lg={{ span: 9, order: 1 }} xs={{ order: 2 }} className='col-left' >
                    <h1>CLING ON! PAINT BRUSHES</h1><hr />
                    <img className='pictureFormat sizeFix' src={ProductHeadPhoto} />
                    <hr />
                    <Row >
                        <Row>
                            <Col md sm={{ span: 12 }} className='col-left'>
                                <NavLink to='/products/shorties' >
                                    <img className='pictureFormat productLimitSize' src={products.shorties.image} />
                                    <button className={styles.productButtons}>Shorties</button>
                                </NavLink>
                            </Col>
                            <Col md sm={{ span: 12 }} className='col-left'>
                                <NavLink to='/products/pointed-brushes' >
                                    <img className='pictureFormat productLimitSize' src={products.pointedBrushes.image} />
                                    <button className={styles.productButtons}>Pointies</button>
                                </NavLink>
                            </Col>
                        </Row>
                        <Row>
                            <Col md sm={{ span: 12 }} className='col-left'>
                                <NavLink to='/products/flat-angled' >
                                    <img className='pictureFormat productLimitSize' src={products.flatAngled.image} />
                                    <button className={styles.productButtons}>Flat Angled</button>
                                </NavLink>
                            </Col>
                            <Col md sm={{ span: 12 }} className='col-left'>
                                <NavLink to='/products/flat-angled-short' >
                                    <img className='pictureFormat productLimitSize' src={products.flatAngledShort.image} />
                                    <button className={styles.productButtons}>Flat Angled (Short)</button>
                                </NavLink>
                            </Col>
                        </Row>
                        <Row>
                            <Col md sm={{ span: 12 }} className='col-left'>
                                <NavLink to='/products/round-brushes'>
                                    <img className='pictureFormat productLimitSize sizeFix' src={products.roundBrushes.image} />
                                    <button className={styles.productButtons}>Round Brushes</button>
                                </NavLink>


                            </Col>
                            <Col md sm={{ span: 12 }} className='col-left'>
                                <NavLink to='/products/oval-brushes'>

                                    <img className='pictureFormat productLimitSize sizeFix' src={products.ovalBrushes.image} />
                                    <button className={styles.productButtons}>Oval Brushes</button>
                                </NavLink>
                            </Col>
                        </Row>
                        <Row>
                            <Col md sm={{ span: 12 }} className='col-left'>
                                <NavLink to='/products/flat-brushes'>

                                    <img className='pictureFormat productLimitSize sizeFix' src={products.flatBrushes.image} />
                                    <button className={styles.productButtons}>Flat Brushes</button>
                                </NavLink>
                            </Col>
                            <Col md sm={{ span: 12 }} className='col-left'>
                                <NavLink to='/products/angled-brushes'>

                                    <img className='pictureFormat productLimitSize sizeFix' src={products.angledBrushes.image} />
                                    <button className={styles.productButtons}>Angled Brushes</button>
                                </NavLink>
                            </Col>


                        </Row>
                        <Row>
                            <Col md sm={{ span: 12 }} className='col-left'>
                                <NavLink to='/products/block-brushes'>

                                    <img className='pictureFormat productLimitSize sizeFix' src={products.blockBrushes.image} />
                                    <button className={styles.productButtons}>Block Brushes</button>
                                </NavLink>
                            </Col>
                        </Row>
                    </Row>
                </Col>
                <Col lg={{ span: 3, order: 2 }} xs={{ span: 12, order: 2 }} className='col-right'>
                    <SideBar />
                    <ul className={styles.list}>
                        <NavLink to='/products/shorties' ><li className={`${styles.listItem} ${styles.top}`}><b>Shorties</b></li></NavLink>
                        <NavLink to='/products/pointed-brushes' ><li className={styles.listItem}><b>Pointies</b></li></NavLink>
                        <NavLink to='/products/flat-angled' ><li className={styles.listItem}><b>Flat Angled</b></li></NavLink>
                        <NavLink to='/products/flat-angled-short' ><li className={styles.listItem}><b>Flat Angled (Short)</b></li></NavLink>
                        <NavLink to='/products/round-brushes/'><li className={styles.listItem}><b>Round Brushes</b></li></NavLink>
                        <NavLink to='/products/oval-brushes' ><li className={styles.listItem}><b>Oval Brushes</b></li></NavLink>
                        <NavLink to='/products/flat-brushes' ><li className={styles.listItem}><b>Flat Brushes</b></li></NavLink>
                        <NavLink to='/products/angled-brushes' ><li className={styles.listItem}><b>Angled Brushes</b></li></NavLink>
                        <NavLink to='/products/block-brushes' ><li className={`${styles.listItem} ${styles.last}`}><b>Block Brushes</b></li></NavLink>

                    </ul>
                    <GreenBar />

                </Col>
            </Row>



        </Container>
    )
}