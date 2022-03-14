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
            {window.innerWidth <= 1270 &&
                    <ul className={`${styles.list} ${styles.phoneMenuList}` }>
                    <NavLink to='/products/shorties' ><li className={`${styles.listItem} ${styles.top} ${styles.phoneMenu}`}><b>Shorties</b></li></NavLink>
                    <NavLink to='/products/pointed-brushes' ><li className={`${styles.listItem} ${styles.phoneMenu}`}><b>Pointies</b></li></NavLink>
                    <NavLink to='/products/flat-angled' ><li className={`${styles.listItem} ${styles.phoneMenu}`}><b>Flat Angled</b></li></NavLink>
                    <NavLink to='/products/short-angled' ><li className={`${styles.listItem} ${styles.phoneMenu}`}><b>Short Angled</b></li></NavLink>
                    <NavLink to='/products/round-brushes/'><li className={`${styles.listItem} ${styles.phoneMenu}`}><b>Round Brushes</b></li></NavLink>
                    <NavLink to='/products/oval-brushes' ><li className={`${styles.listItem} ${styles.phoneMenu}`}><b>Oval Brushes</b></li></NavLink>
                    <NavLink to='/products/flat-brushes' ><li className={`${styles.listItem} ${styles.phoneMenu}`}><b>Flat Brushes</b></li></NavLink>
                    <NavLink to='/products/bent-brushes' ><li className={`${styles.listItem} ${styles.phoneMenu}`}><b>Bent Brushes</b></li></NavLink>
                    <NavLink to='/products/block-brushes' ><li className={`${styles.listItem} ${styles.last} ${styles.phoneMenu}`}><b>Block Brushes</b></li></NavLink>

                </ul>
                    }

            <Row>

                <Col lg={{ span: 9, order: 1 }} xs={{ order: 2 }} className='col-left' >
                    <h1>CLING ON! PAINT BRUSHES</h1><hr />
                    <img className='pictureFormat sizeFix' src={ProductHeadPhoto} />
                    <hr />
                    <Row >
                        {products.map((product, index) => {
                            console.log(products[index + 1])
                            return index % 2 == 0 ? <Row>
                                <Col md sm={{ span: 12 }} className='col-left'>
                                <NavLink to={`/products/${product.url}`}>
                                    <img className='pictureFormat productLimitSize' src={product.image} />
                                    <button className={styles.productButtons}>{product.name}</button>
                                </NavLink>
                                </Col>
                                {
                                    products[index + 1] &&
                                <Col md sm={{ span: 12 }} className='col-left'>
                                    
                                <NavLink to={`/products/${products[index + 1].url}`}>
                                    <img className='pictureFormat productLimitSize' src={products[index + 1].image} />
                                    <button className={styles.productButtons}>{products[index + 1].name}</button>
                                </NavLink>
                                </Col>
                        }
                                </Row> : null
                        
                        })}
                        
                        
                    </Row>
                </Col>
                <Col lg={{ span: 3, order: 2 }} xs={{ span: 12, order: 2 }} className='col-right'>
                    <SideBar />
                    {window.innerWidth >= 1270 &&
                    <ul className={styles.list}>
                    <NavLink to='/products/shorties' ><li className={`${styles.listItem} ${styles.top}`}><b>Shorties</b></li></NavLink>
                    <NavLink to='/products/pointed-brushes' ><li className={styles.listItem}><b>Pointies</b></li></NavLink>
                    <NavLink to='/products/flat-angled' ><li className={styles.listItem}><b>Flat Angled</b></li></NavLink>
                    <NavLink to='/products/short-angled' ><li className={styles.listItem}><b>Short Angled</b></li></NavLink>
                    <NavLink to='/products/round-brushes/'><li className={styles.listItem}><b>Round Brushes</b></li></NavLink>
                    <NavLink to='/products/oval-brushes' ><li className={styles.listItem}><b>Oval Brushes</b></li></NavLink>
                    <NavLink to='/products/flat-brushes' ><li className={styles.listItem}><b>Flat Brushes</b></li></NavLink>
                    <NavLink to='/products/bent-brushes' ><li className={styles.listItem}><b>Bent Brushes</b></li></NavLink>
                    <NavLink to='/products/block-brushes' ><li className={`${styles.listItem} ${styles.last}`}><b>Block Brushes</b></li></NavLink>

                </ul>
                    }
                    
                    <GreenBar />

                </Col>
            </Row>



        </Container>
    )
}