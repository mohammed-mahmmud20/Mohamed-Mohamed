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
    // const chk = document.getElementById('chk')
    // chk.addEventListener('change', () => {
    // document.body.classList.toggle('dark')
    // })
    return (
        <BrowserRouter>
            <nav>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/About"}>About</NavLink>
                <NavLink to={"/Skiils"}>Skiils</NavLink>
                <NavLink to={"/Projects"}>Projects</NavLink>
                <NavLink to={"/Contact"}>Contact</NavLink>
                {/* <div>
                    <input type="checkbox" class="checkbox" id="chk" />
                    <label class="label" for="chk">
                        <i class="fas fa-moon"></i>
                        <i class="fas fa-sun"></i>
                        <div class="ball"></div>
                    </label>
                </div> */}
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