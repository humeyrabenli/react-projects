import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { ThemeProvider, createTheme } from '@mui/material/styles';

interface IHeaderProps {}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <ThemeProvider theme={darkTheme}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Notes App
              </Typography>
            </Toolbar>
          </AppBar>
        </ThemeProvider>
      </Box>
    </div>
  );
};

export default Header;
