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
                <Button variant='primary' type="submit">Submit</Button>
            </form>

        </div>
    )
}