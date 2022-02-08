import React, { useState } from 'react'
import Product from './pages/Product'
import Login from './pages/Login'
import BecomeRetailer from './pages/BecomeRetailer'
import Contact from './pages/Contact'
import FindRetailer from './pages/FindRetailer'
import ProductContainer from './ProductContainer'
import WhyCustomersLoveClingOn from './pages/Love'
import Store from './pages/Store'
import Home from './pages/Home'

import { stack as Menu } from 'react-burger-menu'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useHistory
} from "react-router-dom";
import burgerStyles from '../css/burgerMenu.css'
import styles from '../css/appstyle.module.css'
import globalStyles from '../Assets/global-styles/bootstrap.min.module.css'
import cx from 'classnames'
import general from '../css/general.css'
import TipsAndTricks from './pages/TipsAndTricks'

export default function NavigationBar() {
  var [open, setOpen] = useState(false)
  var [loggedIn, setLoggedIn] = useState(false)
  var [loggedInUser, setLoggedInUser] = useState(JSON.parse(window.localStorage.getItem('loggedInUser')) || {})
  let handleClick = () => {
    setOpen(false)
  }
  var handleLogin = (username) => {
    setLoggedIn(true)
    getUserInformation(username)
  }
  var getUserInformation = (username) => {
    fetch('https://clingonaustralia.com.au/user', {
      method: 'GET',
      header: {
        'Content-Type': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(data => {
        console.log("The user that is logged in is:", data)
        
        setLoggedInUser(data)
        window.localStorage.setItem('loggedInUser', JSON.stringify(data));
      })
      .catch(err => console.error(err))
  }
  var handleLogout = () => {
    fetch('http://clingonaustralia.com.au/logout', {
      method: 'GET',
      header: {
        'Content-Type': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(data => {
        setLoggedIn(false)
        console.log("Successfully logged out")
      })
      .catch(err => console.error(err))
  }
  return (
    <>

      <div className={cx(styles.navBarWrapper)}>
        <nav className={cx(globalStyles.navbar, styles.navigationBar)}>
          <NavLink exact className={cx(globalStyles.navbar, globalStyles['nav-link'], styles.menuItem)} to='/'><b>HOME</b></NavLink>
          <NavLink className={cx(globalStyles.navbar, globalStyles['nav-link'], styles.menuItem)} to='/products'><b>THE BRUSHES</b></NavLink>
          <NavLink className={cx(globalStyles.navbar, globalStyles['nav-link'], styles.menuItem)} to='/find-a-retailer'><b>FIND A RETAILER</b></NavLink>
          <NavLink className={cx(globalStyles.navbar, globalStyles['nav-link'], styles.menuItem)} to='/become-a-retailer'><b>BECOME A RETAILER</b></NavLink>
          <NavLink className={cx(globalStyles.navbar, globalStyles['nav-link'], styles.menuItem)} to='/why-customers-love-cling-on'><b>WHY OUR CUSTOMERS LOVE CLING ON!</b></NavLink>
          <NavLink className={cx(globalStyles.navbar, globalStyles['nav-link'], styles.menuItem)} to='/contact'><b>CONTACT</b></NavLink>
          <NavLink className={cx(globalStyles.navbar, globalStyles['nav-link'], styles.menuItem)} to='/tips-and-tricks'><b>TIPS & TRICKS</b></NavLink>

        </nav>

      </div>
      <div className={cx(globalStyles.navbar, globalStyles['nav-link'], styles.burgerMenu)}>
        <Menu onClose={() => setOpen(false)} onOpen={() => setOpen(true)} isOpen={open} width={'80%'}>
          <NavLink exact to='/' onClick={handleClick} className={`menu-item`}><b>HOME</b></NavLink>
          <NavLink to='/products' onClick={handleClick} className={`menu-item`}><b>THE BRUSHES</b></NavLink>
          <NavLink to='/find-a-retailer' onClick={handleClick} className={`menu-item`}><b>FIND A RETAILER</b></NavLink>
          <NavLink to='/become-a-retailer' onClick={handleClick} className={`menu-item`}><b>BECOME A RETAILER</b></NavLink>
          <NavLink to='/why-customers-love-cling-on' onClick={handleClick} className={`menu-item`}><b>WHY OUR CUSTOMERS LOVE CLING ON!</b></NavLink>
          <NavLink to='/contact' onClick={handleClick} className={`menu-item`}><b>CONTACT</b></NavLink>
          <NavLink to='/tips-and-tricks' onClick={handleClick} className={`menu-item`}><b>TIPS & TRICKS</b></NavLink>

        </Menu>
      </div>
      <Switch>

        <Route exact path={'/'} ><Home /></Route>
        <Route path={'/contact'} ><Contact /></Route>
        <Route path={'/become-a-retailer'}><BecomeRetailer /></Route>
        <Route path={'/find-a-retailer'}><FindRetailer /></Route>
        <Route path={'/why-customers-love-cling-on'} ><WhyCustomersLoveClingOn /></Route>
        <Route path={'/products'}> <ProductContainer /> </Route>
        <Route path={'/store'}> <Store loggedInUser={loggedInUser} /> </Route>
        <Route path={'/login'}> <Login handleLogin={handleLogin} /> </Route>
        <Route path={'/tips-and-tricks'}><TipsAndTricks /></Route>





      </Switch>
      <footer className="bg-light text-center text-lg-start">
        <div className={cx(globalStyles['text-center'], globalStyles['p-3'], styles.footerBackground)}>
          © {new Date().getFullYear()} Copyright: DJ
          {!loggedIn && <NavLink style={{ float: 'right', textDecoration: 'none' }} to='/login'>login</NavLink>}
          {loggedIn && <NavLink style={{ float: 'right', textDecoration: 'none' }} to='/' onClick={() => handleLogout()}>logout</NavLink>}

        </div>
      </footer>
    </>

  )
}