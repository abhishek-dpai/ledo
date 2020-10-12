import React, { useMemo, useState } from "react";
import trimmed_keypoints from "../data/trimmed_keypoints.json";
import Filter from "./Filter";
import Sorting from "./Sorting";
import DisplaySetting from "./DisplaySetting";
function Table() {
  // You can use below imageMap to poppulate data, it wont contain any duplicate images
  const images = useMemo(() => {
    const imageMap = new Map();
    trimmed_keypoints.images.forEach((item) => {
      imageMap.set(item.id, item);
    });
    return imageMap;
  }, [trimmed_keypoints.images]); // showing warning
  //    Line 12:6:  React Hook useMemo has an unnecessary dependency: 'trimmed_keypoints.images'. Either exclude it or remove the dependency array.
  //    Outer scope values like 'trimmed_keypoints.images' aren't valid dependencies because mutating them doesn't re-render the component
  //    react-hooks/exhaustive-deps
  const [attributesName] = useState(Object.keys(images.values().next().value));
  const [showFilter, setShowFilter] = useState(false);
  const [showSorting, setShowSorting] = useState(false);
  const [showDisplaySetting, setShowDisplaySetting] = useState(false);
  console.log(attributesName);
  function handleFilterClick() {
    setShowFilter(true);
    setShowSorting(false);
    setShowDisplaySetting(false);
  }
  function handleSortingClick() {
    setShowFilter(false);
    setShowSorting(true);
    setShowDisplaySetting(false);
  }
  function handleDisplaySettingClick() {
    setShowFilter(false);
    setShowSorting(false);
    setShowDisplaySetting(true);
  }
  return (
    <>
      <div className="main-buttons">
        <button onClick={handleFilterClick}> Filter </button>
        <button onClick={handleSortingClick}>Sorting</button>
        <button onClick={handleDisplaySettingClick}>Display Setting </button>
        <br />
        {showFilter && <Filter />}
        {showSorting && <Sorting />}
        {showDisplaySetting && <DisplaySetting />}
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
            {Array.from(images.values()).map((image) => {
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
