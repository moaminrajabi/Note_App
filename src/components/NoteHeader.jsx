import { useNotes } from "../context/NotesContext";

function NoteHeader({ sortBy, onSort }) {
  const notes = useNotes();
  return (
    <div className="note-header">
      <h1>My Notes ({notes.length})</h1>
      <select value={sortBy} onChange={onSort}>
        <option value="latest"> sort based on latest</option>
        <option value="earliest"> sort based on earliest</option>
        <option value="completed"> sort based on completed</option>
      </select>
    </div>
  );
}

export default NoteHeader;
