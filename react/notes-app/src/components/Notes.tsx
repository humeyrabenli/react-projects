import {Note} from '../models/note.model'
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



interface INotesProps {
   note:Note
   handleDelete: (id: string) => void
}

const Notes:React.FC<INotesProps> = ({note,handleDelete}) => {
  return (
    <div>
      <Card sx={{ minWidth: 275 }} style={{backgroundColor:note.color}}>
      <CardContent>
        
        <Typography variant="h5" component="div">
          {note.title}
        </Typography>
        
        <Typography variant="body2" sx={{mt:1}}>
          {note.text}
        </Typography>
        <Typography sx={{ mb: 1.5, mt:1 }} color="text.secondary">
          {note.date}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined" color="error" onClick={() => handleDelete(note.id)}>Delete</Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default Notes