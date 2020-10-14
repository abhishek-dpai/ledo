import React, { useEffect, useState } from "react";
import "../App.css";
function DisplaySetting(props) {
  const { attributesName, handleOutputImagesAttributes } = props;
  const [attributesToShow, setAttributesToShow] = useState(attributesName);
  const handleDisplaySettingChange = (event) => {
    const { name, value } = event.target;
    attributesToShow.includes(name) === true
      ? setAttributesToShow(
          attributesToShow.filter((attribute) => {
            if (attribute === name) return false;
            else return true;
          })
        )
      : setAttributesToShow([...attributesToShow, name]);
    console.log("value=", value);
    console.log("name=", name);
    console.log("in DisplaySetting attributesToShow=", attributesToShow);
  };
  console.log("before return attributesToShow=", attributesToShow);
  useEffect(() => {
    console.log("in UseEffect attributesToShow=", attributesToShow);
    handleOutputImagesAttributes(attributesToShow);
  }, [attributesToShow]);
  return (
    <div className="display-setting-container">
      <button>Hide Columns</button>
      {attributesName.map((attribute) => {
        return (
          <div className="setting">
            <label for={attribute}>{attribute}</label>
            <input
              type="checkbox"
              onClick={handleDisplaySettingChange}
              name={attribute}
            />
          </div>
        );
      })}
    </div>
  );
}
export default DisplaySetting;
