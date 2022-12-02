import { memo } from "react";
import TrashIcon from "../../icons/TrashIcon";
import Checkbox from "../Checkbox";

const Todo = ({ completed, text, id, setCompleted, deleteTask }) => {
  return (
    <div className="bg-slate-800 rounded-xl p-3 flex gap-2 relative overflow-hidden min-h-max">
      <Checkbox checked={completed} onChange={() => setCompleted(id)} />
      <p
        className={`text-slate-100 break-all pr-8 ${
          completed ? "line-through" : ""
        }`}
      >
        {text}
      </p>
      <div
        onClick={() => deleteTask(id)}
        className="w-8 p-2 bg-red-500 flex items-center justify-center absolute top-0 bottom-0 right-0 pr-3 cursor-pointer"
      >
        <TrashIcon />
      </div>
    </div>
  );
};

export default memo(Todo);
