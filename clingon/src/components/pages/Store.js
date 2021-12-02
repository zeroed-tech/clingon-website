import React, { useState, useEffect } from 'react'
import { store_products } from '../../Assets/data'
import StoreProductDisplay from '../StoreProductDisplay'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Cart from '../Cart'

export default function Store() {
    let [order, setOrder] = useState([])
    let [orderSubtotal, setOrderSubtotal] = useState(0)

    let reducer = () => {
        let num = 0
        if (order.length > 0) {

        
        order.forEach(each => {
            num += (each.price * each.amount)
        })
        setOrderSubtotal(num.toFixed(2))
    } else {
        setOrderSubtotal(0)
    }
    }
    let updateOrder = (newItem) => {

        order = removeDuplicates(newItem)
        reducer()
        
        setOrder(order)

    }
    let removeDuplicates = (objectToInsert) => {
        if (order.find(match => match.id == objectToInsert.id)) {
            order.forEach((item, index) => {
                if (item.id == objectToInsert.id) {

                    if (objectToInsert.amount >= 0) {
                        return order[index] = objectToInsert

                    } else {
                       return order.splice(index, 1)
                    }
                }
            })
        } else {
            order.push(objectToInsert)
        }
        
        return order
    }
    
    return (
        <Container>
            <Row>
                <Col lg={{ span: 8 }}>
                    {store_products.map((product) => {
                        return <StoreProductDisplay id={product['id']} name={product['name']} price={product['price']} RRP={product['RRP']} removeDuplicates={removeDuplicates} updateOrder={updateOrder} />
                    })}
                </Col>
                <Col lg={{ span: 4 }} style={{ backgroundColor: 'white' }}>
                    <Cart orderedItems={order} orderSubtotal={orderSubtotal}/>
                </Col>

            </Row>
        </Container>
    )
}
