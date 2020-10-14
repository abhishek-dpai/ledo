import React, { useState } from "react";
function Filter(props) {
  console.log("props are", props);
  const [filter, setFilter] = useState("none");
  const { attributesName } = props;
  console.log("attributesName in Filter =", attributesName);
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    console.log(event.target.value);
    console.log("filter is=", filter);
  };
  console.log("In Filter component", filter);
  return (
    <div className="filter-choice">
      <select value={filter} onChange={(e) => handleFilterChange(e)}>
        {attributesName.map((attribute) => {
          return <option value={attribute}>{attribute}</option>;
        })}
      </select>
    </div>
  );
}
export default Filter;
