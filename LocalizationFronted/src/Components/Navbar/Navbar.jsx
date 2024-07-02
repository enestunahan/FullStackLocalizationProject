import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Switch, Popover, List, ListItem, ListItemText, ListItemIcon, Box, Typography, Divider, IconButton, Menu, MenuItem, Drawer, Collapse } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import CategoryIcon from '@mui/icons-material/Category';
import CloseIcon from '@mui/icons-material/Close';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import logo from '../../assets/images/logo.png';
import './Navbar.css';

const categories = [
  {
    name: 'Category 1',
    subcategories: ['Subcategory 1-1', 'Subcategory 1-2'],
  },
  {
    name: 'Category 2',
    subcategories: ['Subcategory 2-1', 'Subcategory 2-2'],
  },
  {
    name: 'Category 3',
    subcategories: ['Subcategory 3-1', 'Subcategory 3-2'],
  },
];

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const popoverRef = useRef(null);

  const handleLanguageChange = () => {
    const newLang = currentLanguage === 'en' ? 'tr' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setSelectedCategory(null);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleCategoryClick = () => {
    setCategoryOpen(!categoryOpen);
  };

  const handleCategoryMouseEnter = (category) => {
    setSelectedCategory(category);
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
              <div className='icon'> <HomeIcon fontSize='large' />  </div>
              <div className='iconAddress'> {t('home')} </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className='icon'> <InfoIcon fontSize='large' />  </div>
              <div className='iconAddress'> {t('about')} </div>
            </a>
          </li>
          <li
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            <a href="#">
              <div className='icon'> <PrecisionManufacturingIcon fontSize='large' />  </div>
              <div className='iconAddress'> {t('projects')} </div>
            </a>
            <Popover
              id={anchorEl ? 'simple-popover' : undefined}
              open={Boolean(anchorEl)}
              anchorEl={anchorEl}
              onClose={handlePopoverClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              disableRestoreFocus
              ref={popoverRef}
            >
              <Box display="flex" p={2} width="600px" height="400px">
                <List sx={{ width: '50%' }}>
                  {categories.map((category, index) => (
                    <ListItem
                      key={index}
                      onMouseEnter={() => handleCategoryMouseEnter(category)}
                      sx={{ cursor: 'pointer' }}
                    >
                      <ListItemIcon>
                        <CategoryIcon />
                      </ListItemIcon>
                      <ListItemText primary={category.name} />
                    </ListItem>
                  ))}
                </List>
                <Divider orientation="vertical" flexItem />
                <Box sx={{ width: '50%', paddingLeft: 2 }}>
                  {selectedCategory ? (
                    <>
                      <Typography variant="h6" gutterBottom>
                        {selectedCategory.name}
                      </Typography>
                      <List>
                        {selectedCategory.subcategories.map((subcategory, subIndex) => (
                          <ListItem key={subIndex}>
                            <ListItemIcon>
                              <SubdirectoryArrowRightIcon />
                            </ListItemIcon>
                            <ListItemText primary={subcategory} />
                          </ListItem>
                        ))}
                      </List>
                    </>
                  ) : (
                    <Typography variant="body1">Hover over a category</Typography>
                  )}
                </Box>
              </Box>
            </Popover>
          </li>
          <li>
            <a href="#">
              <div className='icon'> <ContactMailIcon fontSize='large' />   </div>
              <div className='iconAddress'> {t('contact')} </div>
            </a>
          </li>
        </ul>
      </div>
      <div className='socialAndLocalization'>
        <div className='social'>
          <a href="#" className='deneme'>
            <LinkedInIcon fontSize='large' />
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
      <div className='menuIcon'>
        <IconButton onClick={handleDrawerToggle}>
          <MenuIcon fontSize='large' />
        </IconButton>
      </div>
      <Drawer anchor='right' open={drawerOpen} onClose={handleDrawerToggle}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={(e) => e.stopPropagation()} // Prevent closing the drawer
          onKeyDown={(e) => e.stopPropagation()} // Prevent closing the drawer with keyboard events
        >
          <IconButton
            onClick={handleDrawerToggle}
            sx={{ display: 'flex', justifyContent: 'flex-start', fontSize: '2rem', padding: 1 }}
          >
            <CloseIcon fontSize="large" />
          </IconButton>
          <List>
            <ListItem button>
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText primary={t('home')} />
            </ListItem>
            <ListItem button>
              <ListItemIcon><InfoIcon /></ListItemIcon>
              <ListItemText primary={t('about')} />
            </ListItem>
            <ListItem button onClick={handleCategoryClick}>
              <ListItemIcon><PrecisionManufacturingIcon /></ListItemIcon>
              <ListItemText primary={t('projects')} />
              <IconButton onClick={(e) => {
                e.stopPropagation();
                handleCategoryClick();
              }}>
                <AddIcon />
              </IconButton>
            </ListItem>
            <Collapse in={categoryOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {categories.map((category, index) => (
                  <ListItem key={index} sx={{ pl: 4 }}>
                    <ListItemText primary={category.name} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
            <ListItem button>
              <ListItemIcon><ContactMailIcon /></ListItemIcon>
              <ListItemText primary={t('contact')} />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default Navbar;
