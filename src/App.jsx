import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";
import NotesProvider from "./context/NotesContext";
import NoteApp from "./components/NoteApp";

function App() {
  // lifting state :
  // const [notes, setNotes] = useState([]);

  const [sortBy, setSortBy] = useState("latest");

  // function HandleAddNote(newNote) {
  //   // setNotes((PrevNotes) => [...PrevNotes, newNote]);
  //   dispatch({ type: "Add", paylod: newNote });
  // }

  // function HandleDelete(id) {
  //   // setNotes((prevNote) => prevNote.filter((n) => n.id !== id));
  //   dispatch({ type: "Delete", paylod: id });
  // }

  // function HandleCheck(e) {
  //   const noteID = Number(e.target.value);
  //   dispatch({ type: "Check", paylod: noteID });
  // }

  return (
    <NotesProvider>
      <div className="container">
        <NoteHeader sortBy={sortBy} onSort={(e) => setSortBy(e.target.value)} />
        <NoteApp sortBy={sortBy} />
      </div>
    </NotesProvider>
  );
}

export default App;
