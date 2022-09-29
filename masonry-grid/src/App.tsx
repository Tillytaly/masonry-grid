import React from "react";
import { MasonryGrid } from "./components";
import "./App.css";
import { pictures } from "./components";
const settings = {
  width : "100%",
  columnGap : 10,
  rowGap : 10,
}

function App() {
  return <MasonryGrid photos={pictures} settings={settings} />;

}

export default App;
