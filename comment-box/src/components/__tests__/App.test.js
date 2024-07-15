import React from "react";
import { createRoot } from "react-dom/client";
import App from "../App";

it("shows a comment box", () => {
    const div = document.createElement("div"); //fake div
    const root = createRoot(div); // Create a root.
    root.render(<App />); // Render the component.
    console.log(div.innerHTML);
    root.unmount(); // Unmount the component.
});
