import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders panel button", () => {
  const { getByRole } = render(<App />);
  const buttonElement = getByRole("button", { name: /Activate panel/i });
  expect(buttonElement).toBeInTheDocument();
});
