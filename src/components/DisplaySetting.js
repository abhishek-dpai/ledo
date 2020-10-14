import React, { useEffect, useState } from "react";
import "../App.css";
function DisplaySetting(props) {
  const { attributesName, handleOutputImagesAttributes } = props;
  const [attributesToShow, setAttributesToShow] = useState(attributesName);
  const [tempAttributesArray, setTempAttributesArray] = useState(
    attributesName
  );
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
    console.log("in DisplaySetting before attributesToShow=", attributesToShow);

    console.log("value=", value);
    console.log("name=", name);
    console.log("in DisplaySetting tempAttributesArray=", tempAttributesArray);
    console.log("in DisplaySetting attributesToShow=", attributesToShow);
  };
  console.log("before return attributesToShow=", attributesToShow);
  useEffect(() => {
    setTempAttributesArray(
      attributesName.filter((attribute) => {
        if (attributesToShow.includes(attribute)) return true;
        else return false;
      })
    );
    // setAttributesToShow(tempAttributesArray);

    console.log("in UseEffect attributesToShow=", attributesToShow);
    handleOutputImagesAttributes(tempAttributesArray);
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
