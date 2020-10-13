import React, { useMemo, useState } from "react";
import trimmed_keypoints from "../data/trimmed_keypoints.json";
import Filter from "./Filter";
import Sorting from "./Sorting";
import DisplaySetting from "./DisplaySetting";
function Table() {
  // You can use below imageMap to poppulate data, it wont contain any duplicate images
  // const [filteredImages]
  // write a function , get the result
  // later named anything handleFilteredResult should set the filter state then use the useMemo to get the filtered images
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
  const [outputImagesAttributes, setOutputImagesAttributes] = useState(
    Object.keys(images.values().next().value)
  );
  console.log(attributesName);
  function handleFilterClick() {
    setShowFilter(true);
    // setShowSorting(false);
    // setShowDisplaySetting(false);
  }
  function handleSortingClick() {
    // setShowFilter(false);
    setShowSorting(true);
    // setShowDisplaySetting(false);
  }
  function handleDisplaySettingClick() {
    // setShowFilter(false);
    // setShowSorting(false);
    setShowDisplaySetting(true);
  }
  function handleOutputImagesAttributes(attributesToShow) {
    console.log("came in handle output images attributes");
    setOutputImagesAttributes(attributesToShow);
  }
  return (
    <>
      <div className="main-buttons">
        <button className="button" onClick={handleFilterClick}>
          {" "}
          Filter{" "}
        </button>
        <button className="button" onClick={handleSortingClick}>
          Sorting
        </button>
        <button className="button" onClick={handleDisplaySettingClick}>
          Display Setting{" "}
        </button>
        <br />
        {showFilter && <Filter attributesName={attributesName} />}
        {showSorting && <Sorting attributesName={attributesName} />}
        {showDisplaySetting && (
          <DisplaySetting
            attributesName={attributesName}
            handleOutputImagesAttributes={handleOutputImagesAttributes}
          />
        )}
      </div>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              {outputImagesAttributes.map((attribute) => {
                return <th key={attribute}> {attribute} </th>;
              })}
            </tr>
          </thead>
          <tbody>
            {Array.from(images.values()).map((image) => {
              return (
                <tr key={image.id}>
                  {outputImagesAttributes.map((attribute) => {
                    if (attribute === "coco_url" || attribute === "flickr_url")
                      //Can use regex for dynamic url attributes for images {*_url} !!!
                      return (
                        <td>
                          <img
                            src={image[attribute]}
                            alt={attribute}
                            height="200"
                            width="200"
                          />
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
