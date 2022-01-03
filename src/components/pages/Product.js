import React, { useState, useEffect } from 'react'
import styles from '../../css/product.module.css'
import globalStyles from '../../Assets/global-styles/bootstrap.min.module.css'
import SideBar from '../SideBar'
import ListGroup from 'react-bootstrap/ListGroup'
import GreenBar from '../GreenBar'
import cx from 'classnames'
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

                <Col lg={{ span: 9, order: 1 }} xs={{ order: 2 }} className='col-left'>
                    <h1>CLING ON! PAINT BRUSHES</h1><hr />
                    <img className='pictureFormat sizeFix' src='https://image.jimcdn.com/app/cms/image/transf/dimension=529x10000:format=jpg/path/s03fb617b319ccf37/image/ib9a0858dbc9857c2/version/1603518560/image.jpg' />
                    <hr />
                    <Row>
                        <Row>
                            <Col md sm={{ span: 12 }} className='col-left'>
                                <NavLink to='/products/shorties' >
                                    <img className='pictureFormat productLimitSize' src='https://image.jimcdn.com/app/cms/image/transf/dimension=223x10000:format=jpg/path/s03fb617b319ccf37/image/i17c506fc2623a182/version/1608705496/image.jpg' />
                                    <button className={styles.productButtons}>Shorties</button>
                                </NavLink>
                            </Col>
                            <Col md sm={{ span: 12 }} className='col-left'>
                                <NavLink to='/products/flat-brushes'>

                                    <img className='pictureFormat productLimitSize sizeFix' src='https://image.jimcdn.com/app/cms/image/transf/dimension=10000x224:format=jpg:rotate=90/path/s03fb617b319ccf37/image/i8a5b3b7dd8e2af8d/version/1608466024/image.jpg' />
                                    <button className={styles.productButtons}>Flat Brushes</button>
                                </NavLink>
                            </Col>
                        </Row>
                        <Row>
                            <Col md sm={{ span: 12 }} className='col-left'>
                                <NavLink to='/products/round-brushes'>
                                    <img className='pictureFormat productLimitSize sizeFix' src='https://image.jimcdn.com/app/cms/image/transf/dimension=10000x210:format=jpg:rotate=90/path/s03fb617b319ccf37/image/i9088578884f1e057/version/1608466012/image.jpg' />
                                    <button className={styles.productButtons}>Round Brushes</button>
                                </NavLink>


                            </Col>
                            <Col md sm={{ span: 12 }} className='col-left'>
                                <NavLink to='/products/oval-brushes'>

                                    <img className='pictureFormat productLimitSize sizeFix' src='https://image.jimcdn.com/app/cms/image/transf/dimension=10000x256:format=jpg:rotate=90/path/s03fb617b319ccf37/image/i43240a008de91e96/version/1603519837/image.jpg' />
                                    <button className={styles.productButtons}>Oval Brushes</button>
                                </NavLink>
                            </Col>
                        </Row>
                        <Row>
                            <Col md sm={{ span: 12 }} className='col-left'>
                                <NavLink to='/products/angled-brushes'>

                                    <img className='pictureFormat productLimitSize sizeFix' src='https://image.jimcdn.com/app/cms/image/transf/dimension=10000x256:format=jpg:rotate=90/path/s03fb617b319ccf37/image/i8f053ea00566be2d/version/1603519846/image.jpg' />
                                    <button className={styles.productButtons}>Angled Brushes</button>
                                </NavLink>
                            </Col>
                            <Col md sm={{ span: 12 }} className='col-left'>
                                <NavLink to='/products/block-brushes'>

                                    <img className='pictureFormat productLimitSize sizeFix' src='https://image.jimcdn.com/app/cms/image/transf/dimension=313x10000:format=jpg/path/s03fb617b319ccf37/image/ib6fbb22f345e966c/version/1608465973/image.jpg' />
                                    <button className={styles.productButtons}>Block Brushes</button>
                                </NavLink>
                            </Col>
                        </Row>
                        <Row>
                        <Col md sm={{ span: 12 }} className='col-left'>
                                <NavLink to='/products/shorties' >
                                    <img className='pictureFormat productLimitSize' src='https://image.jimcdn.com/app/cms/image/transf/dimension=223x10000:format=jpg/path/s03fb617b319ccf37/image/i17c506fc2623a182/version/1608705496/image.jpg' />
                                    <button className={styles.productButtons}>Shorties</button>
                                </NavLink>
                            </Col>
                        </Row>

                    </Row>
                </Col>
                <Col lg={{ span: 3, order: 2 }} xs={{ span: 12, order: 2 }} className='col-right'>
                    <SideBar />
                    <ul className={styles.list}>
                        <NavLink to='/products/shorties' ><li className={styles.listItem}><b>Shorties</b></li></NavLink>
                        <NavLink to='/products/flat-brushes' ><li className={styles.listItem}><b>Flat Brushes</b></li></NavLink>
                        <NavLink to='/products/round-brushes/'><li className={`${styles.listItem} ${styles.top}`}><b>Round Brushes</b></li></NavLink>
                        <NavLink to='/products/oval-brushes' ><li className={styles.listItem}><b>Oval Brushes</b></li></NavLink>
                        <NavLink to='/products/angled-brushes' ><li className={styles.listItem}><b>Angled Brushes</b></li></NavLink>
                        <NavLink to='/products/block-brushes' ><li className={`${styles.listItem} ${styles.last}`}><b>Block Brushes</b></li></NavLink>
                        <NavLink to='/products/shorties' ><li className={styles.listItem}><b>Shorties</b></li></NavLink>

                    </ul>
                    <GreenBar />

                </Col>
            </Row>



        </Container>
    )
}