import React, { useContext, useReducer } from "react";
import { createContext } from "react";

const NotesContext = createContext();
const NotesDispatchContext = createContext();

function notesReduser(state, action) {
  switch (action.type) {
    case "Add": {
      return [...state, action.paylod];
    }
    case "Delete": {
      return state.filter((s) => s.id !== action.paylod);
    }
    case "Check": {
      return state.map((note) =>
        note.id == action.paylod
          ? { ...note, completed: !note.completed }
          : note
      );
    }
    default:
      throw new Error("unknown action" + action.type);
  }
}

export default function NotesProvider({ children }) {
  const [notes, dispatch] = useReducer(notesReduser, []);

  return (
    <NotesContext.Provider value={notes}>
      <NotesDispatchContext.Provider value={dispatch}>
        {children}
      </NotesDispatchContext.Provider>
    </NotesContext.Provider>
  );
}

export function useNotes() {
  return useContext(NotesContext);
}
export function useDispatchNotes() {
  return useContext(NotesDispatchContext);
}
