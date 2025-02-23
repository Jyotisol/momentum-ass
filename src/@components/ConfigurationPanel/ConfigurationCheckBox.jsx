/* eslint-disable react/prop-types */
import CheckBox from "../CheckBox";

import share from "../../assets/Share.png";

const ConfigurationCheckBox = ({ entities_to_mock, all_entities }) => {
  return (
    <div className="flex flex-col">
      {all_entities.map((entity, index) => {
        const isTrue = entities_to_mock.some((ele) => entity === ele);

        return (
          <div key={index} className="flex justify-between items-center p-2">
            <CheckBox isChecked={isTrue} entity={entity} />
            <img src={share} width={16} />
          </div>
        );
      })}
    </div>
  );
};

export default ConfigurationCheckBox;