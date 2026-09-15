import React from "react";
import { prerenderToNodeStream } from "react-dom/static";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

export async function render(url: string): Promise<string> {
  const { prelude } = await prerenderToNodeStream(
    <React.StrictMode>
      <MemoryRouter initialEntries={[url]}>
        <App />
      </MemoryRouter>
    </React.StrictMode>,
    {
      onError(error) {
        console.error(`Static rendering failed for ${url}:`, error);
      },
    }
  );

  let html = "";
  for await (const chunk of prelude) {
    html += chunk.toString();
  }
  return html;
}
