import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import NoteApp from "../NoteApp";
import NotesProvider from "../../context/NotesContext";

test("Note App #1 : should input be empty after submit", () => {
  render(
    <NotesProvider>
      <NoteApp sortBy="latest" />
    </NotesProvider>
  );
  const inputTitle = screen.getByPlaceholderText(/Title/i);
  const inputDescription = screen.getByPlaceholderText(/Description/i);
  fireEvent.change(inputTitle, { target: { value: "Note one" } });
  fireEvent.change(inputDescription, { target: { value: "Note one descs" } });
  const button = screen.getByRole("button", { name: /Add New Note/i });
  fireEvent.click(button);
  expect(inputTitle.value).toBe("");
});
