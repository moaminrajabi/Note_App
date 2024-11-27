import React, { useState } from "react";
import AddNewNote from "./AddNewNote";
import NoteStatus from "./NoteStatus";
import NoteList from "./NoteList";

function NoteApp({ sortBy }) {
  return (
    <div className="note-app">
      <AddNewNote />
      <div className="note-container">
        <NoteStatus />
        <NoteList sortBy={sortBy} />
      </div>
    </div>
  );
}

export default NoteApp;
