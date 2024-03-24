import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/logoo.jpg'; // Tell webpack this JS file uses this image
import { Container, Typography } from '@mui/material';


export default function NavBar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" component="nav" style={{ backgroundColor: '#AF191E', justifyContent: 'space-between' }}>
        <Toolbar style={{ backgroundColor: '#AF191E', justifyContent: 'space-between' }} >

          <div style={{ display: 'flex', flex:1, justifyContent: 'space-between', marginRight: 100, marginLeft: 100 }}>
            <div>
              <Typography variant='h4'>Unitech Products</Typography>
              {/* <img alt='dssad' width={200} height={50} src={logo}></img> */}
            </div>
            <div style={{ alignSelf: 'center' }}>
              <Button color="inherit" onClick={() => navigate("/home")}>Home</Button>
              <Button color="inherit" onClick={() => navigate("/products")}>Products</Button>
              <Button color="inherit" onClick={() => navigate("/about")}>About Us</Button>
              <Button color="inherit" onClick={() => navigate("/contact")}>Contact Us</Button>
            </div>

          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}