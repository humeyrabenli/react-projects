import React from 'react';
import { Container, Grid } from '@mui/material';
import './App.css';
import Header from './components/Header';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import FeaturedPost from './components/FeaturedPost';
import {featuredPosts, sidebar} from "./data/Data"
import PostCard from './components/PostCard';
import { makeStyles } from '@material-ui/core/styles';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

const useStyles= makeStyles((theme) => ({
  mainGrid: {

  }
}));


function App() {
  const classes=useStyles();
  
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  return (

  
  <ThemeProvider theme={darkTheme}>
     <Container>
    <Header/>
    <FeaturedPost/>
    <br/>
    <Grid container spacing={4}>
         {
           featuredPosts.map((post) => (
             <PostCard post={post} key={post.title}/>
           ))
         }
    </Grid>
    <Grid container spacing={5} className={classes.mainGrid}>
        <Main title='From the Firehouse'/>
{/*        <Sidebar title={sidebar.title} description={sidebar.description} archives={sidebar.archives} social={sidebar.social}/>
 */}    </Grid>
  </Container>
  </ThemeProvider>
  )
}

export default App;
