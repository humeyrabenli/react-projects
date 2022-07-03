import * as React from "react";
import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Note } from "../models/note.model";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';



interface ICreateNotesProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const CreateNotes: React.FC<ICreateNotesProps> = ({ notes, setNotes }) => {
  const [error, setError] = React.useState<string>("");
  const titleRef = React.useRef<HTMLInputElement | null>(null);
  const textRef = React.useRef<HTMLTextAreaElement | null>(null);
  const colorRef = React.useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    console.log("???")
    e.preventDefault();
    if (titleRef.current?.value === "" || textRef.current?.value === "") {
      return setError("All fields are mandatory");
    }

    setError("");
    setNotes([
      ...notes,
      {
        id: new Date().toString(),
        title: (titleRef.current as HTMLInputElement).value,
        text: (textRef.current as HTMLTextAreaElement).value,
        color: (colorRef.current as HTMLInputElement).value,
        date: new Date().toString(),
      },
    ]);
  };

 
  return (
    <>
      <Typography variant="h4" gutterBottom component="div">
        Create Notes
      </Typography>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <TextField id="outlined-basic" label="Title" variant="outlined" ref={titleRef} />
        </div>
        <div style={{marginTop:"20px"}}>
          <TextField
            id="outlined-multiline-static"
            label="Enter your notes"
            multiline
            rows={4}
          />
        </div>
        <div>
        <input type="color" defaultValue="#dfdfdf" ref={colorRef}></input>


        </div>
        <div>
        <Button variant="contained" type="submit">Contained</Button>

        </div>
      </form>
    </>
  );
};

export default CreateNotes;
