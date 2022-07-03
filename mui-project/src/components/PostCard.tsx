import React from 'react'
import { CardMedia, Grid,CardActionArea,Card,CardContent,Typography,Hidden } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';



type props= {
  post: {
    title: string;
    date: string;
    description: string;
    image: string;
    imageText: string;
}
}

const useStyles=makeStyles({
  card: {

  },
  cardDetails: {

  },
  cardMedia: {
    
  }
});

const PostCard:React.FC<props> = ({post}) => {

  const classes=useStyles();
  return (
     <Grid item xs={12} md={6}>
       <CardActionArea component="a" href="#">
         <Card className={classes.card}>
            <div className={classes.cardDetails}>
               <CardContent>
                 <Typography component="h2" variant="h5">
                   {post.title}
                 </Typography>
                 <Typography variant="subtitle1" color="textSecondary">
                   {post.date}
                 </Typography>
                 <Typography variant="subtitle1" paragraph>
                   {post.description}
                 </Typography>
                 <Typography variant="subtitle1" style={{color:"skyblue"}}>
                   Continue reading...
                 </Typography>
               </CardContent>
            </div>
            <Hidden xsDown>
               <CardMedia className={classes.cardMedia} image={post.image} title={post.imageText} />
            </Hidden>
         </Card>

       </CardActionArea>
     </Grid>
  )
}

export default PostCard