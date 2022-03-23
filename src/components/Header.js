import React, { useState } from 'react'
import Logo from  '../images/logo.svg'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
    const [burgerStatus,setBurgerStatus] = useState(false); 
  return (
      <>
    <div className='Header'>
        <a>
            <img src={Logo}></img>
        </a>
        <div className='menu'>
            <p><a href="#">Model S</a></p>
            <p><a href="#">Model 3</a></p>
            <p><a href="#">Model X</a></p>
            <p><a href="#">Model Y</a></p>
        </div>
        <div className='rightMenu'>
            <p><a href='#'>shop</a></p>
            <p><a href='#'>tesla account</a></p>
            <p><a href='#'><MenuIcon onClick={() => setBurgerStatus(true)}/></a></p>

        </div>
        
    </div>
    <BurgerMenu show={burgerStatus}>
        <div className='wrapper'>
        <CustomClose onClick={() => setBurgerStatus(false)}/>
        </div>
    
    <li><a href='#'>Existing Inventory</a></li>
    <li><a href='#'>Used Inventory</a></li>
    <li><a href='#'>Trade-in</a></li>
    <li><a href='#'>Cybertruck</a></li>
    <li><a href='#'>Model S</a></li>
    <li><a href='#'>Model 3</a></li>
    <li><a href='#'>Model X</a></li>
    <li><a href='#'>Model Y</a></li>
</BurgerMenu>
</>
  )
}

export default Header

const BurgerMenu = styled.div`
    position: fixed;
    width:400px;
    top:0;
    right:0;
    bottom:0;
    background-color: #fff;
    line-style:none;
    padding:20px;
    list-style:none;
    z-index:1;
    transform:${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s ease-in-out;
    li{
        padding:20px 0;
        border-bottom:1px solid rgba(0,0,0,0.2);

        a{
            font-weight:600;
        }
    }
    
`

const CustomClose = styled(CloseIcon)`
    cursor:pointer;
`