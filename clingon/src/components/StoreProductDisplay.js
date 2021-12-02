import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
export default function StoreProductDisplay({ id, name, price, RRP, updateOrder, removeDuplicates}) {
    let tempWidth = window.innerWidth > 520 ? '15rem' : '45vw';
    return (
        <div style={{display: 'inline-block'}}>
            <Card style={{ width: tempWidth }}>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text style={{textAlign:'left'}}><b>Price: </b>${price.toFixed(2)}</Card.Text>
                    <Card.Text style={{textAlign:'left'}}><b>RRP: </b>${RRP.toFixed(2)}</Card.Text>
                    <input onChange={(e) => {
                        let amount = parseInt(e.target.value)
                        updateOrder({name, price, RRP, id, amount})
                    }} type='text' style={{width: '30%'}} placeholder='Qty'/>
                </Card.Body>
            </Card>

        </div>
    )
}