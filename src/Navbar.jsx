import React from 'react'
import {  BrowserRouter , Routes , Route , NavLink } from 'react-router-dom';
import "./Navbar.css"
//component
import Home from './Home/Home';
import About from './About/About';
import Skiils from './Skiils/Skiils';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

const Navbar = () => {
    return (
        <BrowserRouter>
            <nav>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/About"}>About</NavLink>
                <NavLink to={"/Skiils"}>Skiils</NavLink>
                <NavLink to={"/Projects"}>Projects</NavLink>
                <NavLink to={"/Contact"}>Contact</NavLink>
            </nav>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/About' element={<About />}/>
                <Route path='/Skiils' element={<Skiils />}/>
                <Route path='/Projects' element={<Projects />}/>
                <Route path='/Contact' element={<Contact />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Navbar