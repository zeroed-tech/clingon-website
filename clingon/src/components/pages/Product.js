import React, { useState, useEffect } from 'react'
import styles from '../../css/product.module.css'
import globalStyles from '../../Assets/global-styles/bootstrap.min.module.css'
import SideBar from '../SideBar'
import ListGroup from 'react-bootstrap/ListGroup'
import cx from 'classnames'
import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
export default function Products() {
    return (
        <div className="container">

            <div className='row'>

                <div className='col-8 col-left'>
                    <h1>CLING ON! PAINT BRUSHES</h1><hr />
                    <img className='pictureFormat' src='https://image.jimcdn.com/app/cms/image/transf/dimension=529x10000:format=jpg/path/s03fb617b319ccf37/image/ib9a0858dbc9857c2/version/1603518560/image.jpg' />
                    <hr />
                </div>
                <div className='col-4 col-right'>
                    <SideBar />
                    <ListGroup>
                    <NavLink to='/products/round-brushes/'><ListGroup.Item>Round Brushes</ListGroup.Item></NavLink>
                    <NavLink to='/products/shorties' ><ListGroup.Item href='#'>Shorties</ListGroup.Item></NavLink>
                    <NavLink to='/products/flat-brushes' ><ListGroup.Item href='#'>Flat Brushes</ListGroup.Item></NavLink>
                    <NavLink to='/products/oval-brushes' ><ListGroup.Item href='#'>Oval Brushes</ListGroup.Item></NavLink>
                    <NavLink to='/products/angled-brushes' ><ListGroup.Item href='#'>Angled Brushes</ListGroup.Item></NavLink>
                    <NavLink to='/products/block-brushes' ><ListGroup.Item href='#'>Block Brushes</ListGroup.Item></NavLink>
                    </ListGroup>
                </div>
                <div className='row'>
                    <div className='col-4 col-left'>
                        <NavLink to='/products/shorties' >
                            <img className='pictureFormat productLimitSize' src='https://image.jimcdn.com/app/cms/image/transf/dimension=223x10000:format=jpg/path/s03fb617b319ccf37/image/i17c506fc2623a182/version/1608705496/image.jpg' />
                            <button className={cx(globalStyles['btn-primary'], styles.productButtons)}>Shorties</button>
                        </NavLink>
                    </div>
                    <div className='col-4 col-left'>
                        <NavLink to='/products/flat-brushes'>

                            <img className='pictureFormat productLimitSize' src='https://image.jimcdn.com/app/cms/image/transf/dimension=10000x224:format=jpg:rotate=90/path/s03fb617b319ccf37/image/i8a5b3b7dd8e2af8d/version/1608466024/image.jpg' />
                            <button className={cx(globalStyles['btn-primary'], styles.productButtons)}>Flat Brushes</button>
                        </NavLink>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-4 col-left'>
                        <NavLink to='/products/round-brushes'>
                            <img className='pictureFormat productLimitSize' src='https://image.jimcdn.com/app/cms/image/transf/dimension=10000x210:format=jpg:rotate=90/path/s03fb617b319ccf37/image/i9088578884f1e057/version/1608466012/image.jpg' />
                            <button className={cx(globalStyles['btn-primary'], styles.productButtons)}>Round Brushes</button>
                        </NavLink>


                    </div>
                    <div className='col-4 col-left'>
                        <NavLink to='/products/oval-brushes'>

                            <img className='pictureFormat productLimitSize' src='https://image.jimcdn.com/app/cms/image/transf/dimension=10000x256:format=jpg:rotate=90/path/s03fb617b319ccf37/image/i43240a008de91e96/version/1603519837/image.jpg' />
                            <button className={cx(globalStyles['btn-primary'], styles.productButtons)}>Oval Brushes</button>
                        </NavLink>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-4 col-left'>
                        <NavLink to='/products/angled-brushes'>

                            <img className='pictureFormat productLimitSize' src='https://image.jimcdn.com/app/cms/image/transf/dimension=10000x256:format=jpg:rotate=90/path/s03fb617b319ccf37/image/i8f053ea00566be2d/version/1603519846/image.jpg' />
                            <button className={cx(globalStyles['btn-primary'], styles.productButtons)}>Angled Brushes</button>
                        </NavLink>
                    </div>
                    <div className='col-4 col-left'>
                        <NavLink to='/products/block-brushes'>

                            <img className='pictureFormat productLimitSize' src='https://image.jimcdn.com/app/cms/image/transf/dimension=313x10000:format=jpg/path/s03fb617b319ccf37/image/ib6fbb22f345e966c/version/1608465973/image.jpg' />
                            <button className={cx(globalStyles['btn-primary'], styles.productButtons)}>Block Brushes</button>
                        </NavLink>
                    </div>
                </div>

            </div>


        </div>
    )
}