import React from 'react'
import {  BrowserRouter , Routes , Route , NavLink } from 'react-router-dom';
import "./Navbar.css"
//component
import About from './About/About';
import Skiils from './Skiils/Skiils';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

const Navbar = () => {
    return (
        <BrowserRouter>
            <nav>
                <NavLink to={"/"}>About</NavLink>
                <NavLink to={"/Skiils"}>Skiils</NavLink>
                <NavLink to={"/Projects"}>Projects</NavLink>
                <NavLink to={"/Contact"}>Contact</NavLink>
                {/* <NavLink to={"/moka"}>moka</NavLink> */}
            </nav>
            <Routes>
                <Route path='/' element={<About />}/>
                <Route path='/Skiils' element={<Skiils />}/>
                <Route path='/Projects' element={<Projects />}/>
                <Route path='/Contact' element={<Contact />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Navbar