import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import "../css/general.css"
export default function StoreProductDisplay({data, updateOrder, updateOrderForEmail}) {
    let tempWidth = window.innerWidth > 520 ? '15rem' : '45vw';
    let {
        price,
        rrp,
        code,
        id
    } = data
    return (
        <div style={{display: 'inline-block'}}>
            <Card style={{ width: tempWidth }}>
                <Card.Body className="store-brush-display">
                    <Card.Title>{data.code}</Card.Title>
                    <Card.Text style={{textAlign:'left'}}><b>Price: </b>${data.price}</Card.Text>
                    <Card.Text style={{textAlign:'left'}}><b>RRP: </b>${data.rrp}</Card.Text>
                    <form>
                    <input onChange={(e) => {
                        let amount = parseInt(e.target.value)
                        
                        updateOrderForEmail({"id": id, "qty": amount})
                        updateOrder({code, price, rrp, id, amount})
                        
                    }} type='text' style={{width: '30%'}} placeholder='Qty'/>
                    </form>
                </Card.Body>
            </Card>

        </div>
    )
}