import * as React from 'react';
//import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
//import Avatar from '@mui/material/Avatar';
//import Button from '@mui/material/Button';
//import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
//import AdbIcon from '@mui/icons-material/Adb';


//  Icon Mui 
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';

// import img
import logoJD from "../assets/logo.jpg"
//import map from "../assets/map.jpg"
//import wpp from "../assets/wpp.png"
//import insta from "../assets/insta.webp"
//import { width } from '@mui/system';

const urlMap = "https://www.google.com.ar/maps/place/Baterias+Fc+Moura/@-31.3834026,-64.2220732,20.13z/data=!4m6!3m5!1s0x943299a54f30924b:0xbc450c7eb83988b7!8m2!3d-31.3833615!4d-64.2219606!16s%2Fg%2F11j6t2ngl8"

//const pages = ['Products', 'Pricing', 'Blog'];
////const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
//  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  //const handleOpenUserMenu = (event) => {
  //  setAnchorElUser(event.currentTarget);
  //};

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
//  const handleCloseUserMenu = () => { // Funtion para ver los detalles de {seting}
//    setAnchorElUser(null);
//    alert('hola')
//  };
//  const handleCloseUserMenuMap = () => { // Funtion para ver los detalles de {seting}
//    setAnchorElUser(null);
//    alert('Octavio Pinto 3266, Córdoba')
//  };

  return (
    <div position="static" className='red'>
      <Container maxWidth="xl" >
        <Toolbar disableGutters >
        {/**  <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color:"rebeccapurple" }} />   Icono modo Pantalla completa  */}
        <a href='https://www.instagram.com/p/CWBSGZBJcec/' rel="noopener" ><img src={logoJD} alt="logo" className='logo'/></a>
        
       
         <div className='container-title' >
         <h1 className="title" >CBA J Detail</h1> 
         </div>                                                      
                                                                  
                                                                  {/** HAce referencia al valor del input de hambur movil */}
          <Box className="nav-mobile"  sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }}}>  {/** Le doy color al menu Hambur */}
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon  />
            </IconButton>
            <Menu
              className='container-app'
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >     
                  
                <MenuItem   >{/** wpp */}
                  <Typography textAlign="center" className='nav' ><a href='https://api.whatsapp.com/send?phone=3512364375&text=hola' ><WhatsAppIcon sx={{ fontSize: 30 }} className='wpp'/></a></Typography>  {/** Lo que contiene el menu de hambur */}
                </MenuItem>
                
                <MenuItem>{/** Insta */}
                  <Typography textAlign="center" className='nav' ><a href='https://www.instagram.com/cba_jdetail/' ><InstagramIcon  sx={{ fontSize: 30 }} className='insta' /></a></Typography>  {/** Lo que contiene el menu de hambur Movil */}
                </MenuItem>
                
                <MenuItem > {/** MAP */}
                  <Typography textAlign="center" className='nav' ><a href={urlMap} ><LocationOnIcon   sx={{ fontSize: 30 }} className='map'/></a></Typography>  {/** Lo que contiene el menu de hambur Movil */}
                </MenuItem>
           
            </Menu>
          </Box>
         {/** <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 ,color:"black" }} />    Icono Pantalla Movil  */}
          <Typography
            className='title'
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 0.5,
              fontFamily: 'Courier New',
              fontWeight: 800,
              letterSpacing: '.3rem',
              textDecoration: 'none',
              fontSize:30,
              
            }}
          >
            CBA JD    {/** Letra titulo MOVIL */}
          </Typography>
          <Box className="redSocial">
            <a href='https://api.whatsapp.com/send?phone=3513175522&text=Hola, Quiero un Turno'><WhatsAppIcon sx={{ fontSize: 45 }} className='wppNav'/></a>
            <a href='https://www.instagram.com/cba_jdetail/'><InstagramIcon className='insta'  sx={{ fontSize: 45 }}/></a>
            <a href={urlMap}><LocationOnIcon   sx={{ fontSize: 40 }} className='mapWeb'/></a>
          
          </Box>
          
     
        </Toolbar>
      </Container>
    </div>
  );
}
export default ResponsiveAppBar;



/**
    Titulo

  
   <Typography
            className='title'
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.3rem',
             // color: 'inherit',
              textDecoration: 'none',
              fontSize:50,
              marginLeft:"25%"
            }
            
            }
          >
            CBA JD 
            </Typography>

*/