import React, { useEffect, useState } from "react";
import "../App.css";
function DisplaySetting(props) {
  const { attributesName, handleOutputImagesAttributes } = props;
  const [attributesToShow, setAttributesToShow] = useState(attributesName);
  const [tempAttributes, setTempAttributes] = useState(attributesName);
  const handleDisplaySettingChange = (event) => {
    const { name, value } = event.target;
    attributesToShow.includes(name)
      ? setAttributesToShow(
          attributesToShow.filter((attribute) => {
            if (attribute === name) return false;
            else return true;
          })
        )
      : setAttributesToShow([...attributesToShow, name]);

    console.log("value=", value);
    console.log("name=", name);
    console.log("in DisplaySetting tempAttributesArray=", tempAttributes);
    console.log("in DisplaySetting attributesToShow=", attributesToShow);
    setTempAttributes(
      attributesName.filter((attribute) => {
        if (attributesToShow.includes(attribute)) return true;
        else return false;
      })
    );
  };
  useEffect(() => {
    handleOutputImagesAttributes(tempAttributes);
  }, [tempAttributes, handleOutputImagesAttributes]);
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
