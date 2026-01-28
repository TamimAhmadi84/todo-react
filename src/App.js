import React, { useState, useEffect } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text, priority) => {
    setTasks([...tasks, { text, priority, ferdig: false }]);
  };

  const updateTask = (index, newTask) => {
    const newTasks = [...tasks];
    newTasks[index] = newTask;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const deleteFinished = () => {
    setTasks(tasks.filter((t) => !t.ferdig));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "done") return task.ferdig;
    if (filter === "active") return !task.ferdig;
    return true;
  });

  

  return (
    <main className="app-main">
      <h1>Min To-Do-Liste</h1>
      <h2>Med React</h2>

      <AddTodo addTask={addTask} />
      <TodoFilter filter={filter} setFilter={setFilter} />
      <TodoList
        tasks={filteredTasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
        deleteFinished={deleteFinished}
      />
    </main>
  );
}



export default App;
