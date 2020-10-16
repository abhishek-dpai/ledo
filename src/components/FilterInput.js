import React, { useState } from "react";

function FilterInput(props) {
  const [filterChoice, setFilterChoice] = useState("null");
  const { filter } = props;
  function handleFilterChoiceChange(e) {
    setFilterChoice(e.target.value);
  }
  return (
    <form className="filter-input">
      <div>{filter}</div>
      <select
        value={filterChoice}
        onChange={(e) => handleFilterChoiceChange(e)}
      >
        <option value="none">None</option>
        <option value="equals">Equals</option>
        <option value="less-than">Less Than</option>
        <option value="greater-than">Greater Than</option>
      </select>
      <input type="submit" value="Submit" />
    </form>
  );
}
export default FilterInput;
