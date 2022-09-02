import React from "react";
// import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import '../App.css';

function TopNav() {
    return (
        <nav className='topNav'>
            <NavLink to="/"><img /></NavLink>
            <NavLink style={({ isActive }) => ({color: isActive ? '#000' : '#fff',background: isActive ? '#FFFF00' : '#0003'})} to="/nerd">Nerd Page</NavLink>
            <NavLink style={({ isActive }) => ({color: isActive ? '#000' : '#fff',background: isActive ? '#FFFF00' : '#0003'})} to="/sports">Sports Page</NavLink>
            <NavLink style={({ isActive }) => ({color: isActive ? '#000' : '#fff',background: isActive ? '#FFFF00' : '#0003'})} to='/sign-up'>Sign-up</NavLink>
            <NavLink style={({ isActive }) => ({color: isActive ? '#000' : '#fff',background: isActive ? '#FFFF00' : '#0003'})} to='/about'>About Page</NavLink>
        </nav>
    )
}

export default TopNav;