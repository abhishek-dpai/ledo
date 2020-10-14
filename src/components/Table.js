import React, { useMemo, useState } from "react";
import trimmed_keypoints from "../data/trimmed_keypoints.json";
import Filter from "./Filter";
import Sorting from "./Sorting";
import DisplaySetting from "./DisplaySetting";
import Pagination from "./Pagination";
import { paginate } from "./Paginate";
function Table() {
  const images = useMemo(() => {
    const imageMap = new Map();
    trimmed_keypoints.images.forEach((item) => {
      imageMap.set(item.id, item);
    });
    return imageMap;
  }, []);
  const [attributesName] = useState(Object.keys(images.values().next().value));
  const [showFilter, setShowFilter] = useState(false);
  const [showSorting, setShowSorting] = useState(false);
  const [showDisplaySetting, setShowDisplaySetting] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(5);
  const [outputImagesAttributes, setOutputImagesAttributes] = useState(
    Object.keys(images.values().next().value)
  );

  console.log(attributesName);
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
    console.log("came in handle output images attributes");
    setOutputImagesAttributes(attributesToShow);
  }
  function handlePageChange(page) {
    setCurrentPage(page);
    console.log("in handlePageChange page= ", page);
  }
  const pageImages = paginate(
    Array.from(images.values()),
    currentPage,
    pageSize
  );
  return (
    <>
      <div className="main-buttons">
        <button className="button" onClick={handleFilterClick}>
          Filter
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
        <table className="table table-striped  table-bordered">
          <thead className="thead-dark">
            <tr>
              {outputImagesAttributes.map((attribute) => {
                return <th key={attribute}> {attribute} </th>;
              })}
            </tr>
          </thead>
          <tbody>
            {pageImages.map((image) => {
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
                            height="100"
                            width="100"
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
