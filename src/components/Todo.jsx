import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";

function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [value, setValue] = useState([]);

  const handleValueChange = function (text) {
    setValue([...value, text]);
    console.log(value, text);
  };
  const transformText = function (text) {
    let first = text.split(" ");
    let type = first.map(
      (item) => item.slice(0, 1).toUpperCase() + item.slice(1)
    );
    return type.join(" ");
  };

  const handleSumbit = function (e) {
    e.preventDefault();
    handleValueChange(inputValue);
  };
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
      {value &&
        value.map((value, index) => {
          return (
            <div key={index}>
              <div className="bg-gray-400 p-5 m-3 flex items-center justify-between text-white cursor-pointer">
                <span>{transformText(value)}</span>
                <AiOutlineDelete size={20} color="black" />
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Todo;
