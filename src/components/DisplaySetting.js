import React, { useState } from "react";
import "../App.css";
function DisplaySetting() {
  const [displaySetting, setDisplaySetting] = useState("none");
  // const [displaySettingComponent, setDisplaySettingComponent] = useState("none");
  const handleDisplaySettingChange = (event) => {
    setDisplaySetting(event.target.value);
    console.log(event.target.value);

    console.log("displaySetting is=", displaySetting);
    //   console.log("displaySettingComponent is=", displaySettingComponent);
  };
  console.log("In DisplaySetting component displaySetting=", displaySetting);
  return (
    <>
      <button>Hide Columns</button>
      <div className="setting">
        <label for="license">License</label>
        <input type="checkbox" name="license" />
      </div>
      <div className="setting">
        <label for="file_name">File_name</label>
        <input type="checkbox" name="file_name" />
      </div>
      <div className="setting">
        <label for="coco_url">Coco_url</label>
        <input type="checkbox" name="coco_url" />
      </div>
      <div className="setting">
        <label for="height">Height</label>
        <input type="checkbox" name="height" />
      </div>
      <div className="setting">
        <label for="width">Width</label>
        <input type="checkbox" name="width" />
      </div>
      <div className="setting">
        <label for="date_captures">Date_captures</label>
        <input type="checkbox" name="date_captures" />
      </div>
      <div className="setting">
        <label for="flikr_url">Flikr_url</label>
        <input type="checkbox" name="flikr_url" />
      </div>
      <div className="setting">
        <label for="id">Id</label>
        <input type="checkbox" name="id" />
      </div>
    </>
  );
}
export default DisplaySetting;
