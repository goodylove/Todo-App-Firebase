import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";

function useTodos() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isInputEmpty, setIsInputEmpty] = useState(false);

  // READ from firebase
  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      let arr = [];
      snapshot.forEach((doc) => {
        arr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(arr);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // UPDATE TODOS
  const updatTodos = async function (todo) {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };

  // Create a todo

  const handleSumbit = async function (e) {
    e.preventDefault();
    if (inputValue === "") {
      setIsInputEmpty(true);
      return;
    }

    await addDoc(collection(db, "todos"), {
      text: inputValue,
      completed: false,
      dat: new Date().toDateString(),
    });
    setIsInputEmpty(false);
    setInputValue("");
  };
  const deleteToDos = async function (id) {
    await deleteDoc(doc(db, "todos", id));
  };

  return {
    handleSumbit,
    updatTodos,
    isInputEmpty,
    todos,
    inputValue,
    setInputValue,
    deleteToDos,
  };
}

export default useTodos;
