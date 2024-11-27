import React from "react";
import Message from "./Message";
import { useNotes } from "../context/NotesContext";

function NoteStatus() {
  const notes = useNotes();
  const AllNotes = notes.length;
  const copmletedNote = notes.filter((n) => n.completed).length;
  const openNotes = AllNotes - copmletedNote;

  if (!AllNotes)
    return (
      <Message text="No Nores has already ">
        <span>💁🏻</span>
      </Message>
    );

  return (
    <ul className="note-status">
      <li>
        All <span> {AllNotes} </span>
      </li>
      <li>
        Completed <span> {copmletedNote} </span>
      </li>
      <li>
        Open <span> {openNotes} </span>
      </li>
    </ul>
  );
}

export default NoteStatus;
