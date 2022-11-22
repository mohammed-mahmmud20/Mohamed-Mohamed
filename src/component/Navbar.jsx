import React, {useState , useEffect} from 'react'
import {  BrowserRouter , Routes , Route , NavLink } from 'react-router-dom';
import "./Navbar.css"
//component
import Home from './Home/Home';
import About from './About/About';
import Skiils from './Skiils/Skiils';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
const Navbar = () => {
    const getMode = () => {
        return JSON.parse(localStorage.getItem("Mode")) || false
    }
    const [dark ,setMode] = useState(getMode())
    useEffect(()=> {
        localStorage.setItem("mode" , JSON. stringify(dark))
    },[dark])
    return (
        <section className= {dark ? "Navbar dark-mode":"Navbar"}>
            <BrowserRouter>
                <nav>
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/About"}>About</NavLink>
                    <NavLink to={"/Skiils"}>Skiils</NavLink>
                    <NavLink to={"/Projects"}>Projects</NavLink>
                    <NavLink to={"/Contact"}>Contact</NavLink>
                    {/* <NavLink>                
                        <div className='navn dark-mode'>
                            <label className="switch">
                                <input
                                type="checkbox" 
                                checked={dark}
                                onChange={()=>setMode(!dark)}
                                />
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </NavLink> */}
                </nav>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/About' element={<About />}/>
                    <Route path='/Skiils' element={<Skiils />}/>
                    <Route path='/Projects' element={<Projects />}/>
                    <Route path='/Contact' element={<Contact />}/>
                </Routes>              
            </BrowserRouter>
        </section>

    )
}

export default Navbar