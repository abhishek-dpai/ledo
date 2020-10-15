import React, { useState } from "react";
import PropTypes from "prop-types";
import SortingInput from "./SortingInput";

function Sorting(props) {
  const [sortingAttribute, setSortingAttribute] = useState("none");
  const [showSortinginput, setShowSortinginput] = useState(false);
  const { attributesName } = props;
  const handleSortingChange = (event) => {
    setSortingAttribute(event.target.value);
    setShowSortinginput(true);
  };
  return (
    <div className="sorting">
      <select value={sortingAttribute} onChange={(e) => handleSortingChange(e)}>
        {attributesName.map((attribute) => {
          return <option value={attribute}>{attribute}</option>;
        })}
      </select>
      {showSortinginput && <SortingInput sortingAttribute={sortingAttribute} />}
    </div>
  );
}
Sorting.propTypes = {
  attributesName: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Sorting;
