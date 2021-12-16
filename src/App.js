import React from 'react'
import NavigationBar from './components/NavBar'
import './css/general.css'
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  
  return (
    
    <div className="App">
      <Router basename="/clingon-website">
      <NavigationBar />
      </Router>
      
      
    </div>
  );
}

export default App;
