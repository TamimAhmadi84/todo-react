import React, { useState } from "react";

function TodoItem({ task, index, updateTask, deleteTask }) {
  const [editing, setEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const toggleFerdig = () => {
    updateTask(index, { ...task, ferdig: !task.ferdig });
  };

  const saveEdit = () => {
    if (newText.trim() === "") return;
    updateTask(index, { ...task, text: newText });
    setEditing(false);
  };

  return (
    <li
      className={`${task.priority} ${task.ferdig ? "ferdig" : ""}`}
      onDoubleClick={toggleFerdig}
    >
      {editing ? (
        <>
          <input
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && saveEdit()}
          />
          <button onClick={saveEdit}>💾</button>
        </>
      ) : (
        <>
          <span>{task.text}</span>
          <div>
            <button onClick={() => setEditing(true)}>✏️</button>
            <button onClick={() => deleteTask(index)}>🗑️</button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;
