import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Mycontext } from "../Context/Mycontext";
import { Link, useNavigate } from "react-router-dom";

export default function MenuAppBar() {
  const { setwelcome } = React.useContext(Mycontext);
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" sx={{ backgroundColor: '#dee2e6' }}>
        <Toolbar>
          <Typography  component="div" sx={{ flexGrow: 1 }}>
            <img
              src="/images/repairo-logo.png"
              alt=""
              style={{ height: "5%", width: "10%"  , marginLeft:"3%"}}
            />
          </Typography>
          {auth && (
            <div>
              <IconButton  sx={{ fontSize: '50px', color: '#0096c7' , marginRight:"3%"}}
                // size="larger"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu   sx={{ padding: "20px", margin: "10px", fontSize: "20px" }}
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem ><Link to={"/home"}>Home</Link></MenuItem>
                
                <MenuItem ><Link to={"/register"}>Logout</Link></MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
