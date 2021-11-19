import React from 'react'
import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";

export default function WhyCustomersLoveClingOn() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-8'>
                    <h1>WHY CLING ON!?</h1>
                    <hr />
                    <p>Cling On! brushes are the favorite brush among <b>furniture painters.</b>They offer superior application, <b>no shedding</b>, and smooth flawless finishing. Featuring premium <b>synthetic filaments</b>, beech wood painted handle, <b>fully locked in epoxy</b> cement to eliminate shedding, and a <b>stainless steel ferrule</b>.  Handmade in Holland, Cling On! is designed for all waterborne materials. Brushes are available in round, oval, flat, block and angled styles.</p>
                    <h1>WHY OUR CUSTOMERS LOVE CLING ON!?</h1>
                    <hr />
                    <p>idk if you want stuff here or not</p>
                </div>
                <div className='col-4'>
                    <img src='https://image.jimcdn.com/app/cms/image/transf/none/path/s03fb617b319ccf37/image/i10044046994cb0c0/version/1603516634/image.jpg' />
                    <NavLink to='/why-customers-love-cling-on/tips-and-tricks'>
                        <button>Tips & Tricks</button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}