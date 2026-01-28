import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ tasks, updateTask, deleteTask, deleteFinished }) {
  return (
    <div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <TodoItem
            key={index}
            task={task}
            index={index}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
      <div className="button-container">
        <button onClick={deleteFinished}>Slett ferdige</button>
      </div>
    </div>
  );
}

export default TodoList;
