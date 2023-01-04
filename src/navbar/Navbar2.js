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

// import Sstpl from '../logo/sstpl.png'
import {Link} from "react-router-dom"
const Header = () => {
  // const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    // <React.Fragment>
      <AppBar sx={{backgroundColor:"#9bc0f7"}}>
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
                <Link to={`/energy_products`} style={{textDecoration:"none"}}><Button id="nbtn1" > Energy Products </Button></Link>
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
    // </React.Fragment>
  );
};

export default Header;