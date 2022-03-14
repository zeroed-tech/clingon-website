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
                    {products.map((product, index) => {
                        return <Route path={`/products/${product.url}`}><BrushDisplay brush={product} textAlignment={index % 2 == 0 ? '' : 'right'} /></Route>})}
                    <Route path={`/products`}><Product /></Route>
                </Switch>


        </Container>
    )
}