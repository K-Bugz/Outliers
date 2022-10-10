import React from "react";
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import '../App.css';

function TopNav() {
    return (
    <TopNavContainer>
        <nav className='topNav'>
            
            <NavLink className='logoContainer' style={({ isActive }) => ({color: isActive ? '#000' : '#edd698',background: isActive ? '#FFFF00' : '#0003'})} to="/">
                <img className='logo' src={require('../images/Outliers.jpeg')} alt="Logo" width="120" height="90"/>
            </NavLink>
            <NavLink style={({ isActive }) => ({color: isActive ? '#000' : '#edd698',background: isActive ? '#FFFF00' : '#0003'})} to="/nerd">Nerd Page</NavLink>
            <NavLink style={({ isActive }) => ({color: isActive ? '#000' : '#edd698',background: isActive ? '#FFFF00' : '#0003'})} to="/moosic">Moo-sic!</NavLink>
            <NavLink style={({ isActive }) => ({color: isActive ? '#000' : '#edd698',background: isActive ? '#FFFF00' : '#0003'})} to="/sports">Sports Page</NavLink>
            {/* <NavLink style={({ isActive }) => ({color: isActive ? '#000' : '#edd698',background: isActive ? '#FFFF00' : '#0003'})} to='/sign-up'>Sign-up</NavLink> */}
        </nav>
    </TopNavContainer>
    )
}


const TopNavContainer = styled.div`
    font-size: 24px;
    font-family: Copperplate,Copperplate Gothic Light,fantasy; 
`

export default TopNav;