import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import '../css/general.css'
import emailjs from 'emailjs-com';

export default function Cart({ orderedItems, orderSubtotal, loggedInUser }) {
    console.log("The user that I have saved is: ", loggedInUser)
    function sendEmail(e) {
        e.preventDefault();


        emailjs.sendForm('gmail', 'template_x35yhxe', e.target, 'user_XBdJq60qqYe9ChiuSyEGv')
            .then((result) => {
                alert(`Your order has been submitted! Confirmation has been sent to ${loggedInUser.Email}. An invoice will be sent to your email as soon as possible.`)
                window.location.reload()
                //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
            }, (error) => {
                console.log(error.text);
            });
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
                <input type="hidden" name="order" value={orderForSend} />
                <input type="hidden" name="subtotal" value={orderSubtotal} />
                <input type="hidden" name="confirmation_email" value={loggedInUser ? 'phanaxe@gmail.com' : ''} />
                <Button variant='primary' type="submit">Submit</Button>
            </form>

        </div>
    )
}