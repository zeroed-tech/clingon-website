import React, {useState} from 'react'
import { bubble as Menu } from 'react-burger-menu'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    useHistory
  } from "react-router-dom";


export default function BurgerMenu() {
    var [open, setOpen] = useState(false)
    let handleClick = () => {
        console.log("Closed ")
    }

    return (
        <div>
            <Menu onClose={setOpen(false)} onOpen={setOpen(true)} isOpen={open}>
                <NavLink  to='/' className={`menu-item`}><button onClick={handleClick}>Shome</button></NavLink>
                <NavLink onClick={handleClick} to='/about' className={`menu-item`}>About</NavLink>
                <NavLink onClick={handleClick} to='/skills' className={`menu-item`}>Skills</NavLink>
                <NavLink to='/projects' className={`menu-item`}>Projects</NavLink>
                <NavLink to='/contact' className={`menu-item`}>Contact</NavLink>
            </Menu>
        </div>
    )
}