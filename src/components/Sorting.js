import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SortingInput from "./SortingInput";

function Sorting(props) {
  const [sortingAttribute, setSortingAttribute] = useState("none");
  const [sortingChoice, setSortingChoice] = useState("none");
  const [showSortinginput, setShowSortinginput] = useState(false);
  const { attributesName, performSorting } = props;
  const handleSortingChange = (event) => {
    setSortingAttribute(event.target.value);
    setShowSortinginput(true);
  };
  const handleSortingSequence = (tempSortingChoice) => {
    console.log(
      "handleSortingSequence of sorting tempSortingChoice=",
      tempSortingChoice
    );
    setSortingChoice(tempSortingChoice);
  };
  useEffect(() => {
    console.log("in useEffect ofsorting sortingChoice=", sortingChoice);
    if (sortingChoice !== "none")
      performSorting(sortingAttribute, sortingChoice);
  }, [sortingChoice, sortingAttribute]);

  return (
    <div className="sorting">
      <select value={sortingAttribute} onChange={(e) => handleSortingChange(e)}>
        <option value="none">None</option>;
        {attributesName.map((attribute) => {
          return (
            <option
              value={attribute}
              key={`${sortingAttribute}_${Math.random()}`}
            >
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
