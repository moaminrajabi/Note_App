import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import NoteApp from "../NoteApp";
import NotesProvider from "../../context/NotesContext";

function addNote(notes) {
  const inputTitle = screen.getByPlaceholderText(/Title/i);
  const inputDescription = screen.getByPlaceholderText(/Description/i);
  const button = screen.getByRole("button", { name: /Add New Note/i });

  notes.map((note) => {
    fireEvent.change(inputTitle, { target: { value: note.title } });
    fireEvent.change(inputDescription, { target: { value: note.description } });
    fireEvent.click(button);
  });
}

test("Note App #1 : should input be empty after submit", () => {
  render(
    <NotesProvider>
      <NoteApp sortBy="latest" />
    </NotesProvider>
  );
  addNote([{ title: "title #1", description: "description #1" }]);
  const inputTitle = screen.getByPlaceholderText(/Title/i);
  expect(inputTitle.value).toBe("");
});

test("Note App #2 : should add multiple items", () => {
  render(
    <NotesProvider>
      <NoteApp sortBy="latest" />
    </NotesProvider>
  );
  addNote([
    { title: "title #1", description: "description #1" },
    { title: "title #1", description: "description #1" },
    { title: "title #1", description: "description #1" },
  ]);
  const divElement = screen.getAllByText(/title #1/i);
  expect(divElement.length).toBe(3);
});
