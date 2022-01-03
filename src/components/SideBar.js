import React from 'react'
import '../css/general.css'
import Col from 'react-bootstrap/Col'

export default function SideBar() {
    return (
        <Col lg={{order: 'last'}} md={{ order: 'first'}} sm={{order: 'first' }} xs={{order: 'first'}}className='col-right'>
            <img className='pictureFormat' id='cling-on-logo' src='https://image.jimcdn.com/app/cms/image/transf/none/path/s03fb617b319ccf37/image/i10044046994cb0c0/version/1603516634/image.jpg' alt='Cling on! Logo'/>
        </Col>
        
    )
}