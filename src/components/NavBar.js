import React, {useState} from 'react'
import Product from './pages/Product'
import Login from './pages/Login'
import WhyOurCustomersLoveContainer from './WhyOurCustomersLoveContainer'
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

export default function NavigationBar() {
  var [open, setOpen] = useState(false)
  let handleClick = () => {
      setOpen(false)
  }
  return (
    <>

      <div className={cx(styles.navBarWrapper)}>
        <nav className={cx(globalStyles.navbar, styles.navigationBar)}>
          <NavLink exact className={cx(globalStyles.navbar, globalStyles['nav-link'], styles.menuItem)} to='/'><b>HOME</b></NavLink>
          <NavLink className={cx(globalStyles.navbar, globalStyles['nav-link'], styles.menuItem)} to='/products'><b>PRODUCTS</b></NavLink>
          <NavLink className={cx(globalStyles.navbar, globalStyles['nav-link'], styles.menuItem)} to='/find-a-retailer'><b>FIND A RETAILER</b></NavLink>
          <NavLink className={cx(globalStyles.navbar, globalStyles['nav-link'], styles.menuItem)} to='/become-a-retailer'><b>BECOME A RETAILER</b></NavLink>
          <NavLink className={cx(globalStyles.navbar, globalStyles['nav-link'], styles.menuItem)} to='/why-customers-love-cling-on'><b>WHY OUR CUSTOMERS LOVE CLING ON!</b></NavLink>
          <NavLink className={cx(globalStyles.navbar, globalStyles['nav-link'], styles.menuItem)} to='/contact'><b>CONTACT</b></NavLink>
          <NavLink className={cx(globalStyles.navbar, globalStyles['nav-link'], styles.menuItem)} to='/store'><b>STORE</b></NavLink>
        </nav>
        
      </div>
      <div className={cx(globalStyles.navbar, globalStyles['nav-link'], styles.burgerMenu)}>
          <Menu onClose={() => setOpen(false)} onOpen={() => setOpen(true)} isOpen={open} width={'80%'}>
            <NavLink exact to='/' onClick={handleClick} className={`menu-item`}><b>HOME</b></NavLink>
            <NavLink to='/products' onClick={handleClick} className={`menu-item`}><b>PRODUCTS</b></NavLink>
            <NavLink to='/find-a-retailer' onClick={handleClick} className={`menu-item`}><b>FIND A RETAILER</b></NavLink>
            <NavLink to='/become-a-retailer' onClick={handleClick} className={`menu-item`}><b>BECOME A RETAILER</b></NavLink>
            <NavLink to='/why-customers-love-cling-on' onClick={handleClick} className={`menu-item`}><b>WHY OUR CUSTOMERS LOVE CLING ON!</b></NavLink>
            <NavLink to='/contact' onClick={handleClick} className={`menu-item`}><b>CONTACT</b></NavLink>
            <NavLink to='/store' onClick={handleClick} className={`menu-item`}><b>STORE</b></NavLink>
          </Menu>
        </div>
      <Switch>

        <Route exact path={'/'} ><Home /></Route>
        <Route path={'/contact'} ><Contact /></Route>
        <Route path={'/become-a-retailer'}><BecomeRetailer /></Route>
        <Route path={'/find-a-retailer'}><FindRetailer /></Route>
        <Route path={'/why-customers-love-cling-on'} ><WhyOurCustomersLoveContainer /></Route>
        <Route path={'/products'}> <ProductContainer /> </Route>
        <Route path={'/store'}> <Store /> </Route>
        <Route path={'/login'}> <Login /> </Route>





      </Switch>
      <footer className="bg-light text-center text-lg-start">
        <div className={cx(globalStyles['text-center'], globalStyles['p-3'], styles.footerBackground)}>
          © {new Date().getFullYear()} Copyright: DJ
        <NavLink style={{float: 'right', textDecoration: 'none'}} to='/login'>login</NavLink>

        </div>
      </footer>
    </>

  )
}