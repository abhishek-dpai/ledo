import React, { useState } from "react";

function Filter(props) {
  console.log("props are", props);
  const [filter, setFilter] = useState("none");
  const [filterComponent, setFilterComponent] = useState("none");
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    console.log(event.target.value);
    // switch (filter) {
    //   case "file_name":
    //     setFilterComponent("FileNameFilter");
    //     break;
    //   case "coco_url":
    //     setFilterComponent("CocoUrlFilter");
    //     break;

    //   case "height":
    //     setFilterComponent("HeightFilter");
    //     break;

    //   case "width":
    //     setFilterComponent("WidthFilter");
    //     break;
    //   case "date_captures":
    //     setFilterComponent("DateCaptures");
    //     break;

    //   case "flikr_url":
    //     setFilterComponent("FlikrUrlFilter");
    //     break;

    //   case "id":
    //     setFilterComponent("IdFilter");
    //     break;
    //   default:
    //     console.log("reached in default in filter switch case");
    //     break;
    // }
    console.log("filter is=", filter);
    console.log("filterComponent is=", filterComponent);
  };
  console.log("In Filter component", filter);
  return (
    <select value={filter} onChange={(e) => handleFilterChange(e)}>
      <option value="">None</option>
      <option value="file_name">File_name</option>
      <option value="coco_url">Coco_url</option>
      <option value="height">Height</option>
      <option value="width">Width </option>
      <option value="date_captures">Date_captures </option>
      <option value="flikr_url">Flikr_url </option>
      <option value="id">Id </option>
    </select>
  );
}
export default Filter;
