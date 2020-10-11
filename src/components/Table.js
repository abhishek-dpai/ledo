import React, { useState } from "react";
import trimmed_keypoints from "../data/trimmed_keypoints.json";
import Filter from "./Filter";
function Table() {
  const [images] = useState(trimmed_keypoints.images);
  const [attributesName] = useState(Object.keys(images[0]));
  const [showFilter, setShowFilter] = useState(false);
  console.log(attributesName);
  function handleFilterClick() {
    setShowFilter(true);
  }
  return (
    <>
      <div className="main-buttons">
        <button onClick={handleFilterClick}> Filter </button>

        <button>Sorting</button>
        <button>Display Setting </button>
        {showFilter && <Filter />}
      </div>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              {attributesName.map((attribute) => {
                return <th key={attribute}> {attribute} </th>;
              })}
            </tr>
          </thead>
          <tbody>
            {images.map((image) => {
              return (
                <tr key={image.id}>
                  {attributesName.map((attribute) => {
                    if (attribute === "coco_url" || attribute === "flickr_url")
                      return (
                        <td>
                          {" "}
                          <img
                            src={image[attribute]}
                            alt={attribute}
                            height="200"
                            width="200"
                          />{" "}
                        </td>
                      );
                    else return <td> {image[attribute]} </td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
