import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import '../css/general.css'


export default function Cart({ orderedItems, orderSubtotal }) {
    let handleSubmit = (e) => {
        e.preventDefault()
        console.log(orderedItems, 'Subtotal: ', orderSubtotal)
    }
    return (
        <div>
            {orderedItems.map(order => {
                console.log('Order', order)
                return <div>
                    <p className='order-item'><b>{order.name}</b> X {order.amount}</p>
                    <p className='order-item order-item-price'>${(order.price * order.amount).toFixed(2)}</p>

                </div>
            })}
            <hr className='style-eight' />
            <h4 id='sub-total'>Order Subtotal: ${orderSubtotal}</h4>
            <Button style={{float: 'right'}} variant='primary' onClick={handleSubmit}>Submit Order</Button>
        </div>
    )
}