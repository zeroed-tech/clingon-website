import React, { useState, useEffect } from 'react'
import StoreProductDisplay from '../StoreProductDisplay'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Cart from '../Cart'
import Alert from 'react-bootstrap/Alert'

export default function Store({ loggedInUser }) {
    let [order, setOrder] = useState([])
    let [orderForEmail, setOrderForEmail] = useState([])
    let [orderSubtotal, setOrderSubtotal] = useState(0)
    let [stockData, setStockData] = useState([])
    let [reloadForm, setReloadForm] = useState(false)
    var subtotal = () => {
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
    var updateOrder = (newItem) => {
        order = removeDuplicates(newItem, order)
        subtotal()

        setOrder(order)

    }
    var updateOrderForEmail = (newItem) => {
        orderForEmail = removeDuplicates(newItem, orderForEmail)
        setOrderForEmail(orderForEmail)

    }
    var updateOrderSubmitted = () => {
        alert("Order has been successfully submitted")
        window.location.reload(false);
    }
    var updateReloadForm = () => {
        setReloadForm(true)
    }
    var removeDuplicates = (objectToInsert, data) => {
        if (data.find(match => match.id == objectToInsert.id)) {
            data.forEach((item, index) => {
                if (item.id == objectToInsert.id) {

                    if (objectToInsert.amount >= 0 || objectToInsert.qty >= 0) {
                        return data[index] = objectToInsert

                    } else {
                        return data.splice(index, 1)
                    }
                }
            })
        } else {
            data.push(objectToInsert)
        }

        return data
    }
    let getStock = () => {
        fetch('https://clingonaustralia.com.au/stock', {
            method: 'GET',
            header: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        })
            .then(resp => resp.json())
            .then(data => setStockData(data))
            .catch(err => console.error(err))
    }
    useEffect(() => {
        getStock()
    }, [])

    return (
        <Container>
            <Row>
                <Col lg={{ span: 8 }}>
                
                    {stockData.map((product) => {
                        // return <StoreProductDisplay key={product["id"]} id={product['id']} name={product['name']} price={product['price']} RRP={product['RRP']} updateOrder={updateOrder} />
                        return <StoreProductDisplay reloadForm={reloadForm} data={product} updateOrderForEmail={updateOrderForEmail} updateOrder={updateOrder} />
                    })
                    }
                </Col>
                <Col lg={{ span: 4 }} style={{ backgroundColor: 'white' }}>
                    <Cart orderedItems={order} orderForEmail={orderForEmail} loggedInUser={loggedInUser} updateReloadForm={updateReloadForm} updateOrderSubmitted={updateOrderSubmitted} orderSubtotal={orderSubtotal} />
                </Col>

            </Row>
        </Container>
    )
}
