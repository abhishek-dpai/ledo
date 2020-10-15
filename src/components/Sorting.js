import React, { useState } from "react";
import PropTypes from "prop-types";
import SortingInput from "./SortingInput";

function Sorting(props) {
  const [sortingAttribute, setSortingAttribute] = useState("none");
  const [showSortinginput, setShowSortinginput] = useState(false);
  const [sortingSequence, setSortingSequence] = useState([]);
  const { attributesName } = props;
  const handleSortingChange = (event) => {
    setSortingAttribute(event.target.value);
    setShowSortinginput(true);
  };
  const handleSortingSequence = (sortingChoice) => {
    setSortingSequence([
      ...sortingSequence,
      { sortingAttribute: sortingChoice },
    ]);
  };

  return (
    <div className="sorting">
      <select value={sortingAttribute} onChange={(e) => handleSortingChange(e)}>
        {attributesName.map((attribute) => {
          return (
            <option value={attribute} key={sortingAttribute}>
              {attribute}
            </option>
          );
        })}
      </select>
      {showSortinginput && (
        <SortingInput
          sortingAttribute={sortingAttribute}
          handleSortingSequence={handleSortingSequence}
        />
      )}
    </div>
  );
}
Sorting.propTypes = {
  attributesName: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Sorting;
