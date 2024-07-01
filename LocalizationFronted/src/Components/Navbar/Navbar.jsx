import React, { useState } from 'react';
import { Switch } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logo from '../../assets/images/logo.png'
import './Navbar.css'

const Navbar = () => {
  const [language, setLanguage] = useState('EN');

  const handleLanguageChange = () => {
    setLanguage((prev) => (prev === 'EN' ? 'TR' : 'EN'));
  };

  return (
    <div className='navbar'>
        
        <div className='logo'>
            <img src= {logo} alt="" />
        </div>

        <div className='menu'>
            <ul className='links'>
               <li>
                    <a href="#"> 
                        <div className='icon'> <HomeIcon fontSize='large'/>  </div>  
                        <div className='iconAddress'> Ana Sayfa  </div>        
                    </a>
                </li>
                <li>
                    <a href="#"> 
                        <div className='icon'> <InfoIcon fontSize='large'/>  </div>  
                        <div className='iconAddress'> Hakkımızda  </div>        
                    </a>
                </li>
                <li>
                    <a href="#"> 
                        <div className='icon'> <PrecisionManufacturingIcon fontSize='large'/>  </div>  
                        <div className='iconAddress'> Projelerimiz </div>        
                    </a>
                </li>
                <li>
                    <a href="#"> 
                        <div className='icon'> <ContactMailIcon fontSize='large'/>   </div>  
                        <div className='iconAddress'> Bize Ulaşın  </div>        
                    </a>
                </li>
            </ul>
        </div>

        <div className='socialAndLocalization'>
                <div className='social'>
                    <a href="#" className='deneme'> 
                        <LinkedInIcon fontSize='large'/> 
                    </a> 
                </div>  
                
                <div className='localization'>
                    <p>En</p>  
                   <Switch
                        checked={language === 'TR'}
                        onChange={handleLanguageChange}
                        inputProps={{ 'aria-label': 'language switch' }}
                        color="default"
                    /> 
                    <p>TR</p>           
                </div>
                
        </div>
    </div>
  );
};

export default Navbar;
