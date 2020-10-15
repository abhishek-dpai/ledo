import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

function SortingInput(props) {
  const [sortingChoice, setSortingChoice] = useState("none");
  const { sortingAttribute, handleSortingSequence } = props;
  function handleSortingChoiceChange(e) {
    setSortingChoice(e.target.value);
  }
  useEffect(() => {
    handleSortingSequence(sortingChoice);
  }, [sortingChoice]);
  return (
    <form className="sorting-input">
      <div>{sortingAttribute}</div>
      <select
        value={sortingChoice}
        onChange={(e) => handleSortingChoiceChange(e)}
      >
        <option value="none">None</option>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
      <input type="submit" value="Submit" />
    </form>
  );
}

SortingInput.propTypes = {
  sortingAttribute: PropTypes.string.isRequired,
  handleSortingSequence: PropTypes.func.isRequired,
};
export default SortingInput;
