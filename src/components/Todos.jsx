import { AiOutlineDelete } from "react-icons/ai";

function Todos({ todo, transformFirstLette }) {
  return (
    <li className="flex    justify-between  p-3 bg-slate-500 m-3 rounded-md">
      <div className="flex gap-3">
        <input type="checkbox" name="" id="" />
        <p className="text-white">{transformFirstLette(todo)}</p>
      </div>
      <button className="text-end">
        <AiOutlineDelete size={20} color="black" />
      </button>
    </li>
  );
}

export default Todos;
