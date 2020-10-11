import React, { useState } from "react";
function Filter() {
  const [filter, setFilter] = useState("none");
  function handleFilterChange(event) {
    const [value] = event.target;
    setFilter(value);
    console.log("filter is=", filter);
  }
  console.log("In Filter component");
  return (
    <select value={filter} onChange={handleFilterChange}>
      <option value="">{filter === "none" ? "Add Filter" : { filter }}</option>
      <option value="license">License</option>
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
