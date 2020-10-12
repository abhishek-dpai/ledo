import React, { useState } from "react";
function Sorting() {
  const [sorting, setSorting] = useState("none");
  // const [sortingComponent, setSortingComponent] = useState("none");
  const handleSortingChange = (event) => {
    setSorting(event.target.value);
    console.log(event.target.value);

    console.log("sorting is=", sorting);
    //   console.log("sortingComponent is=", sortingComponent);
  };
  console.log("In sorting component sorting=", sorting);
  return (
    <select value={sorting} onChange={(e) => handleSortingChange(e)}>
      <option value="">None</option>
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
export default Sorting;
