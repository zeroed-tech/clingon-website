import React, {useEffect, useState} from 'react'
import NavigationBar from './components/NavBar'
import './css/general.css'
import {
  BrowserRouter as Router,
} from "react-router-dom";


function App() {
  let [isLoggedIn, setIsLoggedIn] = useState(false)
  function checkIsLoggedIn() {
    fetch("https://clingonaustralia.com.au/user")
    .then(resp => resp.json())
    .then(data => data ? setIsLoggedIn(true) : setIsLoggedIn(false))
  }
  function isLoggedInCallback(loggedIn) {
      setIsLoggedIn(loggedIn)
  }
  
  useEffect(() => {
    checkIsLoggedIn()
  }, []) 
  return (

    <div className="App">
        <Router>
          <NavigationBar isLoggedIn={isLoggedIn} isLoggedInCallback={isLoggedInCallback}/>
        </Router>


    </div>
  );
}

export default App;
