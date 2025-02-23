/* eslint-disable react/prop-types */

//React icons
import { IoTriangleOutline } from "react-icons/io5";

const Footer = ({ paths }) => {
  return (
    <footer className="fixed bottom-0 h-14 z-50 bg-primary-gray left-14 right-72 flex items-center border border-gray-500 flex-1">
      <p className="text-white ml-5 flex items-center gap-2 text-gray-300 ">
        {paths.map((path, index) => {
          return (
            <span key={index} className="flex gap-2 items-center">
              {path}
              {index != paths.length - 1 && (
                <IoTriangleOutline className="rotate-90 text-xs" />
              )}
            </span>
          );
        })}
      </p>
    </footer>
  );
};

export default Footer;