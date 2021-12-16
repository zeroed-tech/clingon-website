import React from 'react'
import Product from './pages/Product'
import Home from './pages/Home'
import {products} from '../Assets/data'
import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import BrushDisplay from './BrushDisplay';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function ProductContainer() {
    
    return (
        <Container>
                <Switch>
                    <Route path='/products/round-brushes'><BrushDisplay brush={products.roundBrushes}/></Route>
                    <Route path='/products/shorties'><BrushDisplay brush={products.shorties}/></Route>
                    <Route path='/products/flat-brushes'><BrushDisplay brush={products.flatBrushes} textAlignment={'right'}/></Route>
                    <Route path='/products/oval-brushes'><BrushDisplay brush={products.ovalBrushes} /></Route>
                    <Route path='/products/angled-brushes'><BrushDisplay brush={products.angledBrushes} /></Route>
                    <Route path='/products/block-brushes'><BrushDisplay brush={products.blockBrushes} /></Route>

                    <Route path='/products'><Product /></Route>
                </Switch>


        </Container>
    )
}