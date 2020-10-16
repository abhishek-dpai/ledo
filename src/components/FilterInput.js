import React, { useEffect, useState } from "react";

function FilterInput(props) {
  const [filterChoice, setFilterChoice] = useState("null");
  const [value, setValue] = useState("null");
  const { filter, performFiltering } = props;
  function handleFilterChoiceChange(e) {
    setFilterChoice(e.target.value);
  }
  function handleInputValue(e) {
    setValue(e.target.value);
  }
  useEffect(() => {
    console.log("in FilterInput useEffect filterchoice=", filterChoice);
    console.log(("filter=", filter));
    console.log("value=", value);
    if (filterChoice !== "null" && value !== "none")
      performFiltering(filter, filterChoice, value);
  }, [filter, filterChoice, value]);
  return (
    <form className="filter-input">
      <div>{filter}</div>
      <select
        value={filterChoice}
        onChange={(e) => handleFilterChoiceChange(e)}
      >
        <option value="none">None</option>
        <option value="equal">Equal</option>
        <option value="less-than">Less than</option>
        <option value="less-than-or-equal">Less than or equal</option>
        <option value="greater-than">Greater than</option>
        <option value="greater-than-or-equal">Greater than or equal</option>
        <option value="not-equal">Not equal</option>
        <option value="contains">Contains</option>
      </select>
      <input type="text" value={value} onChange={handleInputValue}></input>
      <input type="submit" value="Submit" />
    </form>
  );
}
export default FilterInput;
