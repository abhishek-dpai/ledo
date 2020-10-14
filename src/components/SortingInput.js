import React, { useState } from "react";
function SortingInput(props) {
  const [sortingChoice, setSortingChoice] = useState("none");
  const { sortingAttribute } = props;
  function handleSortingChoiceChange(e) {
    setSortingChoice(e.target.value);

    console.log("sortingChoice is=", sortingChoice);
  }

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
export default SortingInput;
