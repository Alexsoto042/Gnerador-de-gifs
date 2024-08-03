import AddCategory from "./components/addCategoty";
import React, { useState } from "react";
import DisplayGifs from "./components/DisplayGifs";

function App() {
  const [category, setCategory] = useState("");

  return (
    <div className="App">
      <AddCategory setCategory={setCategory} />
      <DisplayGifs category={category} />
    </div>
  );
}

export default App;

// A3MYH8mdZughqnHT6YEb1Zeaybraeww5  APi Gif
