import "./App.css";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0] p-4 flex justify-center  items-center">
      <Todo />
    </div>
  );
}

export default App;
