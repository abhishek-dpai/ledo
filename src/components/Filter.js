import React, { useState } from "react";
import PropTypes from "prop-types";
import FilterInput from "./FilterInput";

function Filter(props) {
  const [filter, setFilter] = useState("none");
  const [showFilterInput, setShowFilterInput] = useState(false);

  const { attributesName, performFiltering } = props;
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    setShowFilterInput(true);
  };

  return (
    <div className="filter-choice">
      <select value={filter} onChange={(e) => handleFilterChange(e)}>
        <option value="none">None</option>
        {attributesName.map((attribute) => {
          return (
            <option value={attribute} key={`${attribute}`}>
              {attribute}
            </option>
          );
        })}
      </select>
      {showFilterInput && (
        <FilterInput filter={filter} performFiltering={performFiltering} />
      )}
    </div>
  );
}
Filter.propTypes = {
  attributesName: PropTypes.arrayOf(PropTypes.string).isRequired,
  performFiltering: PropTypes.func.isRequired,
};
export default Filter;
