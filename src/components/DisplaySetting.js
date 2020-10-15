import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../App.css";

function DisplaySetting(props) {
  const { attributesName, handleOutputImagesAttributes } = props;
  const [attributesToShow, setAttributesToShow] = useState(attributesName);
  const [tempAttributes, setTempAttributes] = useState(attributesName);

  const setAttributesToShowHelper = (name) => {
    if (attributesToShow.includes(name)) {
      return attributesToShow.filter((attribute) => {
        if (attribute === name) return false;
        return true;
      });
    }
    return [...attributesToShow, name];
  };
  const handleDisplaySettingChange = (event) => {
    const { name } = event.target;
    setAttributesToShow(setAttributesToShowHelper(name));

    setTempAttributes(
      attributesName.filter((attribute) => {
        if (attributesToShow.includes(attribute)) return true;
        return false;
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
            <label htmlFor={attribute}>{attribute}</label>
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
DisplaySetting.propTypes = {
  attributesName: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleOutputImagesAttributes: PropTypes.func.isRequired,
};
export default DisplaySetting;
