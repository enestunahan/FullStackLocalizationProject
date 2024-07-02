import React from 'react';
import { useTranslation } from 'react-i18next';
import { Switch } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logo from '../../assets/images/logo.png';
import './Navbar.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const handleLanguageChange = () => {
    const newLang = currentLanguage === 'en' ? 'tr' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language',newLang);
  };

  return (
    <div className='navbar'>
        <div className='logo'>
            <img src={logo} alt="Logo" />
        </div>
        <div className='menu'>
            <ul className='links'>
               <li>
                    <a href="#"> 
                        <div className='icon'> <HomeIcon fontSize='large'/>  </div>  
                        <div className='iconAddress'> {t('home')} </div>        
                    </a>
                </li>
                <li>
                    <a href="#"> 
                        <div className='icon'> <InfoIcon fontSize='large'/>  </div>  
                        <div className='iconAddress'> {t('about')} </div>        
                    </a>
                </li>
                <li>
                    <a href="#"> 
                        <div className='icon'> <PrecisionManufacturingIcon fontSize='large'/>  </div>  
                        <div className='iconAddress'> {t('projects')} </div>        
                    </a>
                </li>
                <li>
                    <a href="#"> 
                        <div className='icon'> <ContactMailIcon fontSize='large'/>   </div>  
                        <div className='iconAddress'> {t('contact')} </div>        
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
                    <p>EN</p>  
                   <Switch
                        checked={currentLanguage === 'tr'}
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
