import React from 'react'
import Product from './pages/Product'
import {products} from '../Assets/data'
import {
    Switch,
    Route
} from "react-router-dom";
import BrushDisplay from './BrushDisplay';
import Container from 'react-bootstrap/Container'

export default function ProductContainer() {
    
    return (
        <Container>
                <Switch>
                    <Route path='/products/shorties'><BrushDisplay brush={products.shorties}/></Route>
                    <Route path='/products/flat-brushes'><BrushDisplay brush={products.flatBrushes} textAlignment={'right'}/></Route>
                    <Route path='/products/round-brushes'><BrushDisplay brush={products.roundBrushes}/></Route>
                    <Route path='/products/oval-brushes'><BrushDisplay brush={products.ovalBrushes} textAlignment={'right'}/></Route>
                    <Route path='/products/angled-brushes'><BrushDisplay brush={products.angledBrushes} /></Route>
                    <Route path='/products/block-brushes'><BrushDisplay brush={products.blockBrushes} textAlignment={'right'}/></Route>
                    <Route path='/products/pointed-brushes'><BrushDisplay brush={products.pointedBrushes}/></Route>
                    <Route path='/products'><Product /></Route>
                </Switch>


        </Container>
    )
}