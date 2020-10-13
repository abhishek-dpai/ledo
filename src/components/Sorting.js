import React, { useState } from "react";
function Sorting(props) {
  const [sorting, setSorting] = useState("none");
  // const [sortingComponent, setSortingComponent] = useState("none");
  const { attributesName } = props;
  const handleSortingChange = (event) => {
    setSorting(event.target.value);
    console.log(event.target.value);

    console.log("sorting is=", sorting);
    //   console.log("sortingComponent is=", sortingComponent);
  };
  console.log("In sorting component sorting=", sorting);
  return (
    <div className="sorting">
      <select value={sorting} onChange={(e) => handleSortingChange(e)}>
        {attributesName.map((attribute) => {
          return <option value={attribute}>{attribute}</option>;
        })}
      </select>
    </div>
  );
}
export default Sorting;
