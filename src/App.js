import { useState } from "react";
import "./App.css";
import ToDoListItems from "./ToDoListItems";

function App() {
  const [todolist, setTodolist] = useState([]);

  const saveToDoList = (e) => {
    const todoname = e.target.todoname.value;
    if (!todolist.includes(todoname) && todoname.trim() !== "") {
      const finalToDoList = [...todolist, todoname];
      setTodolist(finalToDoList);
    } else {
      alert("ToDo Name Already Exists or is empty...");
    }
    e.preventDefault();
  };
 
  const deleteToDo = (todoname) => {
    const updatedToDoList = todolist.filter((item) => item !== todoname);
    setTodolist(updatedToDoList);
  };

  const list = todolist.map((value, index) => {
    return <ToDoListItems value={value} key={index} onDelete={deleteToDo} />;
  });

  return (
    <div className="App">
      <h1>TO DO LIST</h1>
      <form onSubmit={saveToDoList}>
        <input type="text" name="todoname" />
        <button>Save</button>
      </form>

      <div className="outerDiv">
        <ul>{list}</ul>
      </div>
    </div>
  );
}

export default App;
