import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Todos from "./Todos";
import useTodos from "../Hooks/useTodos";

function Todo() {
  const {
    handleSumbit,
    updatTodos,
    isInputEmpty,
    todos,
    deleteToDos,
    inputValue,
    setInputValue,
  } = useTodos();
  return (
    <div className="border-2 md:w-[50%] w-full  h-auto bg-white rounded-md shadow-xl">
      <h3 className="flex justify-center p-3 font-bold">TODO APP</h3>
      <form
        action=""
        className=" flex justify-center w-full p-5"
        onSubmit={handleSumbit}
      >
        <input
          type="text"
          placeholder="add to"
          className="border-2 w-full outline-none rounded-md p-2"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="bg-purple-500 text-white p-2">
          <AiOutlinePlus size={30} />
        </button>
      </form>
      {isInputEmpty && (
        <p className="pl-5 text-red-500">
          please add a text to the input value
        </p>
      )}

      {todos && (
        <ul className="gap-20">
          {todos.map((item, index) => {
            return (
              <Todos
                key={index}
                todo={item}
                toggle={updatTodos}
                deleteToDo={deleteToDos}
              />
            );
          })}
        </ul>
      )}
      {todos.length < 1 ? null : (
        <p className="text-center font-thin text-lg">
          You Have {todos.length} todos
        </p>
      )}
    </div>
  );
}

export default Todo;
