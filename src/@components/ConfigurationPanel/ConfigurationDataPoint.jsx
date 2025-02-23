import warning from "../../assets/warning1.png";

// eslint-disable-next-line react/prop-types
const ConfigurationDataPoint = ({ dataPoint }) => {
  return (
    <div className="flex gap-2 items-center text-white">
      <img src={warning} width={10} height={10} /> {dataPoint}
    </div>
  );
};

export default ConfigurationDataPoint;