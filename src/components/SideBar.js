import React from 'react'
import '../css/general.css'
import Col from 'react-bootstrap/Col'
import Logo from './../Assets/images/CLINGONwhiteWEB.png'
export default function SideBar() {
    return (
        <Col lg={{order: 'last'}} md={{ order: 'first'}} sm={{order: 'first' }} xs={{order: 'first'}}className='col-right'>
            <img className='pictureFormat' id='cling-on-logo' src={Logo} alt='Cling on! Logo'/>
        </Col>
        
    )
}