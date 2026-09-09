import React from "react";
import { Writable } from "node:stream";
import { renderToPipeableStream } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

export function render(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    let html = "";
    let didError = false;

    const destination = new Writable({
      write(chunk, _encoding, callback) {
        html += chunk.toString();
        callback();
      },
    });

    destination.on("finish", () => {
      if (didError) {
        reject(new Error(`Server rendering failed for ${url}`));
        return;
      }
      resolve(html);
    });

    const stream = renderToPipeableStream(
      <React.StrictMode>
        <MemoryRouter initialEntries={[url]}>
          <App />
        </MemoryRouter>
      </React.StrictMode>,
      {
        onAllReady() {
          stream.pipe(destination);
        },
        onError(error) {
          didError = true;
          console.error(error);
        },
      }
    );
  });
}
