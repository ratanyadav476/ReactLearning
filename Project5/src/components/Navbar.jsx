import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
const navigate=useNavigate()


    const linkClass =
        "hover:text-gray-300 px-3 py-1 text-lg";
    const activeClass = "text-yellow-300 font-semibold";


    function clickHandler(){
        navigate("/")
    }
    return (
        <nav className="bg-blue-600 text-white px-4 py-3 flex items-center justify-between relative">
            <div className="text-2xl font-bold" onClick={clickHandler}>MySite</div>

            {/* Hamburger for mobile */}
            <button
                className="md:hidden text-white text-3xl"
                onClick={() => setIsOpen(!isOpen)}
            >
                ☰
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-6">
                <NavLink to="/" className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ""}`}>LoveOne</NavLink>
                <NavLink to="/about" className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ""}`}>KnownWedge</NavLink>
                <NavLink to="/services" className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ""}`}>Mixtures</NavLink>
                <NavLink to="/contact" className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ""}`}>Sweets</NavLink>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-blue-700 flex flex-col items-center md:hidden space-y-4 py-4">
                    <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ""}`}>LoveOne</NavLink>
                    <NavLink to="/about" onClick={() => setIsOpen(false)} className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ""}`}>KnownWedge</NavLink>
                    <NavLink to="/services" onClick={() => setIsOpen(false)} className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ""}`}>Mixtures</NavLink>
                    <NavLink to="/contact" onClick={() => setIsOpen(false)} className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ""}`}>Sweets</NavLink>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
