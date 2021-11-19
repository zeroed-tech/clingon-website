import React from 'react'
import Button from 'react-bootstrap/Button'
import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import SideBar from '../SideBar';
import '../../css/general.css'

export default function WhyCustomersLoveClingOn() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-8 col-left'>
                    <h1>WHY CLING ON!?</h1>
                    <hr />
                    <p>Cling On! brushes are the favorite brush among <b>furniture painters.</b>They offer superior application, <b>no shedding</b>, and smooth flawless finishing. Featuring premium <b>synthetic filaments</b>, beech wood painted handle, <b>fully locked in epoxy</b> cement to eliminate shedding, and a <b>stainless steel ferrule</b>.  Handmade in Holland, Cling On! is designed for all waterborne materials. Brushes are available in round, oval, flat, block and angled styles.</p>
                    <h1>WHY OUR CUSTOMERS LOVE CLING ON!?</h1>
                    <hr />
                    <p>idk if you want stuff here or not</p>
                </div>
                <div className='col-4 col-right'>
                    <SideBar />
                    <NavLink to='/why-customers-love-cling-on/tips-and-tricks'>
                        <Button id='tips-and-tricks'>Tips & Tricks</Button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}