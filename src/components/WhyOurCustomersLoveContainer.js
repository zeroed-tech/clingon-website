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
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
export default function WhyOurCustomersLoveContainer() {
    
    return (
        <Container>
            <Switch>
            <Route path='/why-customers-love-cling-on/tips-and-tricks'><TipsAndTricks /></Route>

            <Route path='/why-customers-love-cling-on'><Love /></Route>
            </Switch>
        </Container>
    )
}