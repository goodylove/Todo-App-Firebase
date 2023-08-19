import { AiOutlineDelete } from "react-icons/ai";

function Todos({ todo, toggle, deleteToDo }) {
  const transformText = function (t) {
    let first = t?.split(" ");
    let type = first?.map(
      (item) => item.slice(0, 1).toUpperCase() + item.slice(1)
    );
    return type?.join(" ");
  };
  return (
    <>
      <li className="flex    justify-between  p-3 bg-slate-500  rounded-md mx-3">
        <div className="flex gap-3">
          <input
            type="checkbox"
            name=""
            id=""
            onChange={() => toggle(todo)}
            checked={todo.completed ? "checked" : ""}
          />
          <p
            onClick={() => toggle(todo)}
            className={`text-white ${todo.completed ? " line-through" : ""}`}
          >
            {transformText(todo.text)}
          </p>
        </div>
        <button className="text-end" onClick={() => deleteToDo(todo.id)}>
          <AiOutlineDelete size={20} color="black" />
        </button>
      </li>
      <p className="text-[10px] text-end pr-5">{todo.dat}</p>
    </>
  );
}

export default Todos;
