import React, { useCallback, useEffect, useMemo, useState } from "react";
import trimmedKeypoints from "../data/trimmed_keypoints.json";
import Filter from "./Filter";
import Sorting from "./Sorting";
import DisplaySetting from "./DisplaySetting";
import Pagination from "./Pagination";
import paginate from "../utils/Paginate";

function Table() {
  const images = useMemo(() => {
    const imageMap = new Map();
    trimmedKeypoints.images.forEach((item) => {
      imageMap.set(item.id, item);
    });
    return imageMap;
  }, []);
  const [attributesName] = useState(Object.keys(images.values().next().value));
  const [showFilter, setShowFilter] = useState(false);
  const [showSorting, setShowSorting] = useState(false);
  const [showDisplaySetting, setShowDisplaySetting] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(4);
  const [outputImages, setOutputImages] = useState(Array.from(images.values()));
  const [tempArray, setTempArray] = useState([]);
  const [outputImagesAttributes, setOutputImagesAttributes] = useState(
    Object.keys(images.values().next().value)
  );
  function handleFilterClick() {
    setShowFilter(true);
  }
  function handleSortingClick() {
    setShowSorting(true);
  }
  function handleDisplaySettingClick() {
    setShowDisplaySetting(true);
  }
  function handleOutputImagesAttributes(attributesToShow) {
    setOutputImagesAttributes(attributesToShow);
  }
  function handlePageChange(page) {
    setCurrentPage(page);
  }
  const pageImages = paginate(outputImages, currentPage, pageSize);

  function performSorting(sortingAttribute, sortingChoice) {
    const tempArray = [...Array.from(images.values())];
    console.log("tempArray=", tempArray);
    console.log("outputImages=", outputImages);
    console.log("sortingAttribute=", sortingAttribute);
    console.log("sortingChoice=", sortingChoice);
    console.log("images=", images);
    if (sortingChoice === "ascending")
      setOutputImages(
        tempArray.sort((a, b) =>
          a[sortingAttribute] < b[sortingAttribute] === true ? -1 : 1
        )
      );
    else
      setOutputImages(
        tempArray.sort((a, b) => b[sortingAttribute] - a[sortingAttribute])
      );
    console.log("tempArray after soring=", tempArray);

    console.log("after sorting sortedImages=", outputImages);
  }

  const performFiltering = (filter, filterChoice, value) => {
    console.log("in Table filterchoice=", filterChoice);
    console.log(("filter=", filter));
    console.log("value=", value);

    setTempArray(
      outputImages.filter((image) => {
        // initially only testing for license
        if (image[filter] === Number(value)) return true;
        return false;
      })
    );
  };
  console.log("before return outputImages=", outputImages);
  return (
    <>
      <div className="main-buttons">
        <button className="button" type="button" onClick={handleFilterClick}>
          Filter
        </button>
        <button className="button" type="button" onClick={handleSortingClick}>
          Sorting
        </button>
        <button
          className="button"
          type="button"
          onClick={handleDisplaySettingClick}
        >
          Display Setting
        </button>
        <br />
        {showFilter && (
          <Filter
            attributesName={attributesName}
            performFiltering={performFiltering}
          />
        )}
        {showSorting && (
          <Sorting
            attributesName={attributesName}
            performSorting={performSorting}
          />
        )}
        {showDisplaySetting && (
          <DisplaySetting
            attributesName={attributesName}
            handleOutputImagesAttributes={handleOutputImagesAttributes}
          />
        )}
      </div>
      <div className="table-container">
        <table className="table table-striped  table-bordered">
          <thead className="thead-dark">
            <tr>
              {outputImagesAttributes.map((attribute) => {
                return <th key={attribute}>{attribute}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {pageImages.map((image) => {
              return (
                <tr key={image.id}>
                  {outputImagesAttributes.map((attribute) => {
                    if (attribute === "coco_url" || attribute === "flickr_url")
                      //  Can use regex for dynamic url attributes for images {*_url} !!!
                      return (
                        <td key={`${attribute}_${image.id}`}>
                          <img
                            src={image[attribute]}
                            alt={attribute}
                            height="100"
                            width="100"
                          />
                        </td>
                      );
                    return (
                      <td key={`${attribute}_${image.id}`}>
                        {image[attribute]}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pagination
          itemsCount={images.size}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
}
export default Table;
