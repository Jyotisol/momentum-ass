import configurationData from "../../utils/configurationData";
import CheckBox from "../CheckBox";
import InputBox from "../InputBox";
import Select from "../Select";
import ConfigurationCheckBox from "./ConfigurationCheckBox";
import ConfigurationColumn from "./ConfigurationColumn";
import ConfigurationDataPoint from "./ConfigurationDataPoint";
import ConfigurationHeading from "./ConfigurationHeading";

const Configuration = () => {
  const data = configurationData;

  return (
    <div className="fixed right-0 z-50 flex flex-col gap-5 top-14 bg-primary-gray h-full w-72 p-2 overflow-y-auto pb-96">
      <ConfigurationColumn>
        <div className="text-white font-sembold text-xl">{data.flow}</div>
        {data.dataPoints.map((point, index) => (
          <ConfigurationDataPoint dataPoint={point} key={index} />
        ))}
      </ConfigurationColumn>

      <ConfigurationColumn>
        <ConfigurationHeading heading="Selected flow" />
        <Select options={["POST /carts/{carts_id}"]} />
      </ConfigurationColumn>

      <ConfigurationColumn>
        <ConfigurationHeading heading="Dependencies" />
        <p className="text-primary-light-gray">
          Select the onces you want to mock
        </p>
        <ConfigurationCheckBox
          entities_to_mock={[...data.entities_to_mock]}
          all_entities={[...data.dependencies]}
          dependencies={true}
        />
      </ConfigurationColumn>

      <ConfigurationColumn>
        <ConfigurationHeading heading="Databases" />
        <p className="text-primary-light-gray">
          Select if you want to mock database
        </p>
        <div className="flex flex-col gap-2">
          {!data.is_db_mocked ? (
            <>
              <CheckBox isChecked={false} entity={"I want to mock databases"} />
              <CheckBox
                isChecked={true}
                entity={"I don’t want to mock database"}
              />
            </>
          ) : (
            <>
              <CheckBox isChecked={true} entity={"I want to mock databases"} />
              <CheckBox
                isChecked={false}
                entity={"I don’t want to mock database"}
              />
            </>
          )}
        </div>
      </ConfigurationColumn>

      <ConfigurationColumn>
        <ConfigurationHeading heading="Database Configurations" />
        <div className="flex flex-col gap-5">
          <InputBox
            inputLable={"Database User"}
            value={data.db_config.username}
          />
          <InputBox
            inputLable={"Database Password"}
            value={data.db_config.password}
          />
          <InputBox
            inputLable={"Database Hostname"}
            value={data.db_config.hostname}
          />
        </div>
      </ConfigurationColumn>

      <div className="fixed flex bottom-0 right-0 h-14 bg-primary-gray border-t border-gray-500  w-72">
        <div className="ml-auto p-2">
          <button
            className="bg-blue-500 text-white p-2 px-4 rounded justify-end"
            onClick={() => console.log("saving")}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Configuration;