import React from 'react'
import Love from './pages/Love'
import TipsAndTricks from './pages/TipsAndTricks';
import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
export default function WhyOurCustomersLoveContainer() {
    
    return (
        <div className='container'>
            <Switch>
            <Route path='/why-customers-love-cling-on/tips-and-tricks'><TipsAndTricks /></Route>

            <Route path='/why-customers-love-cling-on'><Love /></Route>
            </Switch>
        </div>
    )
}