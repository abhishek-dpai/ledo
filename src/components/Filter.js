import React, { useState } from "react";
import FilterInput from "./FilterInput";
import PropTypes from "prop-types";

function Filter(props) {
  const [filter, setFilter] = useState("none");
  const [showFilterInput, setShowFilterInput] = useState(false);

  const { attributesName } = props;
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    setShowFilterInput(true);
  };
  return (
    <div className="filter-choice">
      <select value={filter} onChange={(e) => handleFilterChange(e)}>
        {attributesName.map((attribute) => {
          return <option value={attribute}>{attribute}</option>;
        })}
      </select>
      {showFilterInput && <FilterInput filter={filter} />}
    </div>
  );
}
Filter.propTypes = {
  attributesName: PropTypes.string.isRequired,
};
export default Filter;
