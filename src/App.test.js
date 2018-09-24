import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Navbar from "./components/navbar";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("shows that the navbar component is also present", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Navbar />, div);
  ReactDOM.unmountComponentAtNode(div);
});
