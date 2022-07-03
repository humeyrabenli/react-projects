import React, { useState } from "react";
import "./App.css";
import { Note } from "./models/note.model";
import Header from "./components/Header";
import Container from "@mui/material/Container";
import Grid from "@material-ui/core/Grid";
import NotesList from "./components/NotesList";
import CreateNotes from "./components/CreateNotes";

function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title: "Meetings",
      text: "Schedule meeting with UI/UX Team",
      color: "#dfdfdf",
      date: new Date().toString(),
    },
  ]);
  return (
    <>
      <Header />
      <Grid container style={{marginTop:'50px'}}>
        <Grid item xs={6}>
          <NotesList notes={notes} setNotes={setNotes}/>
        </Grid>
       
      </Grid>
      <Grid container style={{marginTop:'50px'}}>
        <Grid item xs={6}>
          <CreateNotes notes={notes} setNotes={setNotes}/>
        </Grid>
       
      </Grid>
    </>
  );
}

export default App;
