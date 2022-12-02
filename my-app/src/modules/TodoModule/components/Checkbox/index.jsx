import React from "react";
import CheckIcon from "../../icons/CheckIcon";

const Checkbox = ({ checked, onChange }) => {
  return (
    <div
      onClick={() => onChange(!checked)}
      className={`w-6 h-6 p-1 border-2 rounded-lg shrink-0 ${
        checked ? "bg-red-200" : "bg-transparent"
      } border-red-400 cursor-pointer flex items-center justify-center`}
    >
      {checked ? <CheckIcon /> : null}
    </div>
  );
};

export default Checkbox;
