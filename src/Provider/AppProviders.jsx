import React from "react";
import NotesProvider from "../context/NotesContext";

function AppProviders({ children }) {
  return <NotesProvider> {children} </NotesProvider>;
}

export default AppProviders;
