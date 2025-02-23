/* eslint-disable react/prop-types */

import { useState } from "react";

const CheckBox = ({ isChecked, entity }) => {
  const [checkedBox, setCheckedBox] = useState(isChecked);

  function handleCheckBox() {
    setCheckedBox(!checkedBox);
  }

  return (
    <div>
      <input
        id="checked-checkbox"
        type="checkbox"
        value=""
        className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-300 rounded"
        checked={checkedBox}
        onChange={handleCheckBox}
      ></input>
      <label htmlFor="checked-checkbox" className="ms-2 text-sm text-white">
        {entity}
      </label>
    </div>
  );
};

export default CheckBox;