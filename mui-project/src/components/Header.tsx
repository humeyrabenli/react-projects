import React from "react";
import { Toolbar, Divider, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Badge from "@mui/material/Badge";
import { makeStyles } from '@material-ui/core/styles';

const useStyles= makeStyles((theme) => ({
    title: {
        flexGrow:1,
    },
    tagline: {
        fontSize:20,
        textTransform:"uppercase",
        justifyContent:"center",
        fontFamily:"Montserrat",
    }
}));

const Header = () => {

    const classes=useStyles();
  return (
    <>
      <Toolbar>
        <IconButton color='inherit'>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>Blogging Website</Typography>
        <IconButton color='inherit'>
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton color='inherit'>
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <Toolbar className={classes.tagline}>
          Express your emotions through words
      </Toolbar>
    </>
  );
};

export default Header;
