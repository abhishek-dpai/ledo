import React, { useState } from "react";

function Filter(props) {
  const [filter, setFilter] = useState("none");
  const { attributesName } = props;
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };
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
