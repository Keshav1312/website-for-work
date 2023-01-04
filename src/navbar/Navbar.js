import React from "react";
import './Nav.css';
import {
  AppBar,
  Button,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";

import {
  CDropdown, 
  CDropdownToggle, 
  CDropdownMenu, 
  CDropdownItem, 
  CDropdownDivider, 
  CNavbar, 
  CContainer, 
  CNavbarBrand,
  CNavbarToggler,
  CCollapse,
  CNavbarNav} from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'


// import Sstpl from '../logo/sstpl.png'
import {Link} from "react-router-dom"
import Energyproduct from './../aa/Energyproduct';
const Header = () => {
  // const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <React.Fragment>
      <AppBar sx={{backgroundColor:"#0d6efd"}}>
        <Toolbar>
          {/* This is the logo, where we can insert the logo. */}
          {/* <img src={Sstpl} width={80} height={70} alt={"SSTPL"} /> */}
          
            
              {/* <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="primary"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="Products" />
                <Tab label="Services" />
                <Tab><a>About us</a></Tab>
                <Tab label="Contact" />
              </Tabs> */}
              <div style={{marginLeft:"auto", marginRight:"auto"}}>
                <Link to={`/`} style={{textDecoration:"none"}}><Button id="nbtn1" > Home </Button></Link>
                <CDropdown style={{height:"10vh"}}>
                  <CDropdownToggle>Dropdown</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">Action</CDropdownItem>
                    <CDropdownItem href="#">Another action</CDropdownItem>
                    <CDropdownItem href="#">Something else here</CDropdownItem>
                    <CDropdownDivider />
                    <CDropdownItem href="#">Separated link</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
                <Link to={`/Iot_products`} style={{textDecoration:"none"}}><Button id="nbtn1" > IoT Products </Button></Link>
                <Link to={`/applications`} style={{textDecoration:"none"}}><Button id="nbtn1" > Applications </Button></Link>
                <Link to={`/knowledge_base`} style={{textDecoration:"none"}}><Button id="nbtn1" > Knowledge Base </Button></Link>
                <Link to={`/abt_jeltronix`} style={{textDecoration:"none"}}><Button id="nbtn1" > About Jeltronix </Button></Link>
              </div>
              {/* If you need the login and signup, uncomment the below codefor the same. */}
              {/* <Button sx={{ marginLeft: "auto" }} variant="contained">
              <Link to={`/login`} style={{color:"white", textDecoration:"none"}}>
                Login
                </Link>
              </Button>
              
              <Button sx={{ marginLeft: "10px" }} variant="contained">
                <Link to={`/signup`} style={{color:"white", textDecoration:"none"}}>
                SignUp
                </Link>
              </Button>  */}
           
          
        </Toolbar>
      </AppBar>
    </React.Fragment>
    // <CNavbar style={{width:"100%"}} colorScheme="dark" className="bg-dark">
    //   <CContainer fluid>
    //     <CNavbarBrand href="#">Navbar</CNavbarBrand>
    //     <CNavbarToggler aria-label="Toggle navigation" aria-expanded={true} />
    //     <CCollapse className="navbar-collapse" visible={true}>
    //       <CNavbarNav>
    //         <CDropdown dark component="li" variant="nav-item">
    //           <CDropdownToggle>Dropdown</CDropdownToggle>
    //           <CDropdownMenu>
    //             <CDropdownItem href="#">Action</CDropdownItem>
    //             <CDropdownItem href="#">Another action</CDropdownItem>
    //             <CDropdownItem href="#">Something else here</CDropdownItem>
    //             <CDropdownDivider />
    //             <CDropdownItem href="#">Separated link</CDropdownItem>
    //           </CDropdownMenu>
    //         </CDropdown>
    //       </CNavbarNav>
    //     </CCollapse>
    //   </CContainer>
    // </CNavbar>
  );
};

export default Header;