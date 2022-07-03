import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import WhatshotIcon from "@material-ui/icons/Whatshot";
import MovieIcon from "@material-ui/icons/Movie";
import {useNavigate} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import TvIcon from "@material-ui/icons/Tv";


export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate=useNavigate();


  React.useEffect(()=>{
      if(value===0)
          navigate("/");
      else if(value===1) navigate("/movies");
      else if(value===2) navigate("/series");
      else if(value===3) navigate("/search");

  },[value,navigate])

  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        backgroundColor: "#2d313a",
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          style={{ color: "black" }}
          label="Trending"
          icon={<WhatshotIcon />}
        />
        <BottomNavigationAction
          style={{ color: "black" }}
          label="Movies"
          icon={<MovieIcon />}
        />
        <BottomNavigationAction
          style={{ color: "black" }}
          label="TV Series"
          icon={<TvIcon />}
        />
        <BottomNavigationAction
          style={{ color: "black" }}
          label="Search"
          icon={<SearchIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
