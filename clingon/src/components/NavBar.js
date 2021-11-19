import React from 'react'
import Product from './pages/Product'
import WhyOurCustomersLoveContainer from './WhyOurCustomersLoveContainer'
import BecomeRetailer from './pages/BecomeRetailer'
import Contact from './pages/Contact'
import FindRetailer from './pages/FindRetailer'
import ProductContainer from './ProductContainer'
import WhyCustomersLoveClingOn from './pages/Love'
import Home from './pages/Home'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    useHistory
} from "react-router-dom";

import styles from '../css/appstyle.module.css'
import globalStyles from '../Assets/global-styles/bootstrap.min.module.css'
import cx from 'classnames'
import general from '../css/general.css'

export default function NavigationBar() {
    
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
          </nav>
        </div>
        <Switch>
          
          <Route exact path={'/'} ><Home /></Route>
          <Route path={'/contact'} ><Contact /></Route>
          <Route path={'/become-a-retailer'}><BecomeRetailer /></Route>
          <Route path={'/find-a-retailer'}><FindRetailer /></Route>
          <Route path={'/why-customers-love-cling-on'} ><WhyOurCustomersLoveContainer /></Route>
          <Route path={'/products'}> <ProductContainer/> </Route>
          
          



        </Switch>
        <footer className="bg-light text-center text-lg-start">
        <div className={cx(globalStyles['text-center'], globalStyles['p-3'], styles.footerBackground)}>
          © 2020 Copyright: DJ
        </div>
      </footer>
</>

    )
}