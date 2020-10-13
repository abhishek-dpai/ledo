import React, { useState } from "react";
function Filter(props) {
  console.log("props are", props);
  const [filter, setFilter] = useState("none");
  const { attributesName } = props;
  console.log("attributesName in Filter =", attributesName);
  //   const [filterComponent, setFilterComponent] = useState("none");
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    console.log(event.target.value);

    console.log("filter is=", filter);
    // console.log("filterComponent is=", filterComponent);
  };
  console.log("In Filter component", filter);
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

// switch (filter) {
//   case "file_name":
//     setFilterComponent("FileNameFilter");
//     break;
//   case "coco_url":
//     setFilterComponent("CocoUrlFilter");
//     break;

//   case "height":
//     setFilterComponent("HeightFilter");
//     break;

//   case "width":
//     setFilterComponent("WidthFilter");
//     break;
//   case "date_captures":
//     setFilterComponent("DateCaptures");
//     break;

//   case "flikr_url":
//     setFilterComponent("FlikrUrlFilter");
//     break;

//   case "id":
//     setFilterComponent("IdFilter");
//     break;
//   default:
//     console.log("reached in default in filter switch case");
//     break;
// }
