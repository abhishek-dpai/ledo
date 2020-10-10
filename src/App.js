import React, { useState } from "react";
import trimmed_keypoints from "./trimmed_keypoints.json";
import "./App.css";

function App() {
  // console.log("data=", trimmed_keypoints.info);
  const [images] = useState(trimmed_keypoints.images);
  // images.forEach((image) => {
  //   console.log(image.file_name);
  // });
  return (
    <div className="App">
      <h1>size of images array is:- {images.length}</h1>
      <ul>
        {images.map((image) => {
          return <li>{image.file_name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
