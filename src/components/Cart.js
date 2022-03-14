import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import '../css/general.css'
import emailjs from 'emailjs-com';

export default function Cart({ orderedItems, orderSubtotal, orderForEmail, updateOrderSubmitted, loggedInUser }) {
    console.log("Order For Email is:" + orderForEmail)

    

    function sendEmail(e) {
        e.preventDefault();
        
        fetch("https://clingonaustralia.com.au/order", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(orderForEmail)

        })
        .then(resp => updateOrderSubmitted())
        

    }
    let orderForSend = orderedItems.map(each => {
        return `${each.code} X ${each.amount}`
    })
    orderForSend = orderForSend.join("----")

    return (
        <div>
            {orderedItems.map(order => {

                return <div>
                    <p className='order-item'><b>{order.code}</b> X {order.amount}</p>
                    <p className='order-item order-item-price'>${(order.price * order.amount).toFixed(2)}</p>

                </div>
            })}
            <hr className='style-eight' />
            <form onSubmit={sendEmail}>
                <input type="hidden" name="confirmation_email" value={loggedInUser ? 'phanaxe@gmail.com' : ''} />
                <Button variant='primary' type="submit" style={{display: 'inline-block'}}>Confirm Order</Button>
                <div style={{display: 'inline-block', width: '60%', fontSize: '15px', float: 'right', backgroundColor: 'rgba(0,0,0,0.1)'}}>
                    <p>HOW TO ORDER:</p>
                    <ol>
                        <li>Select brushes and quantity</li>
                        <li>Click 'Confirm Order'</li>
                        <li>A confirmation will be sent to your email address</li>
                        <li>An invoice, which includes freight costs, will be issued via email within 12 hours</li>
                        <li>Orders will be sent once invoice has been paid</li>
                    </ol>
                </div>
            </form>

        </div>
    )
}
