import React, { useState } from "react";

function Filter(props) {
  console.log("props are",props)
  const [filter, setFilter] = useState("none");
  const handleFilterChange = (event)=> {
    console.log(event.target.value)
    setFilter(event.target.value);
    console.log("filter is=", filter);
  }
  console.log("In Filter component",filter);
  return (
    <select value={filter} onChange={(e)=>handleFilterChange(e)}>
      {/* <option value={filter}>{filter === "none" ? "Add Filter" : filter }</option> */}
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
