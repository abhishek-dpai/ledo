import React, { useState } from "react";
import "../App.css";
function DisplaySetting(props) {
  const [displaySetting, setDisplaySetting] = useState("none");
  // const [displaySettingComponent, setDisplaySettingComponent] = useState("none");
  const { attributesName } = props;
  const handleDisplaySettingChange = (event) => {
    setDisplaySetting(event.target.value);
    console.log(event.target.value);

    console.log("displaySetting is=", displaySetting);
    //   console.log("displaySettingComponent is=", displaySettingComponent);
  };
  console.log("In DisplaySetting component displaySetting=", displaySetting);
  return (
    <div className="display-setting-container">
      <button>Hide Columns</button>
      {attributesName.map((attribute) => {
        return (
          <div className="setting">
            <label for={attribute}>{attribute}</label>
            <input type="checkbox" name={attribute} />
          </div>
        );
      })}
    </div>
  );
}
export default DisplaySetting;
