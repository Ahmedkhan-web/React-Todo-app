import { useState } from "react";

function TodoApp() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  function addTodo() {
    if (todo === "") return;

    if (editIndex === null) {
      setTodoList([...todoList, todo]);
    } else {
      const updatedList = [...todoList];
      updatedList[editIndex] = todo;
      setTodoList(updatedList);
      setEditIndex(null);
    }

    setTodo("");
  }

  function deleteTodo(index) {
    const newList = todoList.filter((_, i) => i !== index);
    setTodoList(newList);
  }

  function editTodo(index) {
    setTodo(todoList[index]);
    setEditIndex(index);
  }

  return (
    <div className="max-w-3xl mx-auto mt-16 bg-black/60 p-8 md:p-12 rounded-3xl border border-white/20">
      
      {/* BIG LOGO / HEADER */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-6xl font-bold text-amber-700">
          Todo App
        </h1>
        <p className="text-white/60 mt-2">
          Manage your daily tasks easily
        </p>
      </div>

      {/* INPUT */}
      <div className="flex gap-4 mb-8">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter a task..."
          className="flex-1 bg-transparent border-b border-white/30 text-white py-2 outline-none"
        />
        <button
          onClick={addTodo}
          className="px-6 py-2 bg-amber-700 text-black font-bold rounded-xl"
        >
          {editIndex === null ? "Add" : "Update"}
        </button>
      </div>

      {/* TODO LIST */}
      <ul className="space-y-4">
        {todoList.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-start gap-4 bg-black/70 px-4 py-3 rounded-xl"
          >
            {/* TEXT (WRAPS PROPERLY) */}
            <span className="text-white break-words max-w-[70%]">
              {item}
            </span>

            {/* ACTION BUTTONS */}
            <div className="flex gap-3 shrink-0">
              <button
                onClick={() => editTodo(index)}
                className="text-amber-500 font-bold"
              >
                Edit
              </button>
              <button
                onClick={() => deleteTodo(index)}
                className="text-red-500 font-bold"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* EMPTY STATE */}
      {todoList.length === 0 && (
        <p className="text-center text-white/40 mt-8">
          No tasks added yet
        </p>
      )}
    </div>
  );
}

export default TodoApp;
