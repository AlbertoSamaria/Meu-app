import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

test("renderiza Home e mostra lista de TODOs", async () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText(/Home/i)).toBeInTheDocument();
  // aguarda o carregamento dos itens mock
  await waitFor(() => {
    expect(screen.getByText(/Aprender TypeScript/)).toBeInTheDocument();
  });
});
