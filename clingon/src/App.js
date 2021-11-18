import React, { useState } from 'react'
import NavigationBar from './components/NavBar'
import styles from './css/appstyle.module.css'
import Home from './components/Home'
import globalStyles from '../src/Assets/global-styles/bootstrap.min.module.css'
import cx from 'classnames'
import general from './css/general.css'
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

function App() {
  
  let [render, setRender] = useState('products')
  let updateRender = (update) => {
    console.log('Updating to', update)
    setRender = update
  }
  return (
    <div className="App">
      <Router >
      <NavigationBar />
      </Router>
      
      <footer className="bg-light text-center text-lg-start">
        <div className={cx(globalStyles['text-center'], globalStyles['p-3'], styles.footerBackground)}>
          © 2020 Copyright: DJ
        </div>
      </footer>
    </div>
  );
}

export default App;
