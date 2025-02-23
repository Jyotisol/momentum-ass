/* eslint-disable react/prop-types */
const Select = ({ options }) => {
    return (
      <select
        title="select"
        className="w-full text-white bg-transparent border-2 rounded-[4px] border-gray-d9 py-1 px-4 outline-none"
      >
        {options.map((optionItem) => (
          <option
            key={optionItem}
            className="text-black"
            style={{ maxWidth: "100%" }}
          >
            {optionItem}
          </option>
        ))}
      </select>
    );
  };
  
  export default Select;