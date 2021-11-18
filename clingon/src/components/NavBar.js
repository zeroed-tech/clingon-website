import React from 'react'
import Product from './Product'
import BecomeRetailer from './BecomeRetailer'
import Contact from './Contact'
import FindRetailer from './FindRetailer'
import ProductContainer from './ProductContainer'
import WhyCustomersLoveClingOn from './Love'
import Home from './Home'

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
            <NavLink className={cx(globalStyles.navbar, globalStyles['nav-link'], styles.menuItem)} to='/'><b>HOME</b></NavLink>
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
          <Route path={'/why-customers-love-cling-on'} ><WhyCustomersLoveClingOn /></Route>
          <Route path={'/products'}> <ProductContainer/> </Route>
          
          



        </Switch>
</>

    )
}