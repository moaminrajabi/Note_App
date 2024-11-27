import "@testing-library/jest-dom";

// Clean up after each test
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

afterEach(() => {
  cleanup();
});
