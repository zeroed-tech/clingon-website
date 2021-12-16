import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
export default function StoreProductDisplay({stockData, updateOrder}) {
    let tempWidth = window.innerWidth > 520 ? '15rem' : '45vw';
    let {
        id,
        Series,
        code,
        price,
        rrp
    } = stockData
    return (
        <div style={{display: 'inline-block'}}>
            <Card style={{ width: tempWidth }}>
                <Card.Body>
                    <Card.Title>{code}</Card.Title>
                    <Card.Text style={{textAlign:'left'}}><b>Price: </b>${price.toFixed(2)}</Card.Text>
                    <Card.Text style={{textAlign:'left'}}><b>RRP: </b>${rrp.toFixed(2)}</Card.Text>
                    <input onChange={(e) => {
                        let amount = parseInt(e.target.value)
                        updateOrder({code, price, rrp, id, amount})
                    }} type='text' style={{width: '30%'}} placeholder='Qty'/>
                </Card.Body>
            </Card>

        </div>
    )
}