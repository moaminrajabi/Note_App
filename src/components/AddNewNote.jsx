import React, { useState } from "react";
import { useDispatchNotes } from "../context/NotesContext";

function AddNewNote() {
  const dispatch = useDispatchNotes();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function HandleSubmit(e) {
    e.preventDefault();

    if (!title || !description) return null;

    const newNote = {
      id: Date.now(),
      title: title,
      description: description,
      completed: false,
      createAt: new Date().toISOString(),
    };
    setTitle("");
    setDescription("");
    dispatch({ type: "Add", paylod: newNote });
  }

  return (
    <div className="add-new-note">
      <h2>Add New Note</h2>
      <form className="note-form" onSubmit={HandleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="text-field"
          placeholder="Title"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          className="text-field"
          placeholder="Description"
        />
        <button type="submit" className="btn btn--primary">
          Add New Note
        </button>
      </form>
    </div>
  );
}

export default AddNewNote;
