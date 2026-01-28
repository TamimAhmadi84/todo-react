import React, { useState } from "react";



function AddTodo({ addTask }) {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("low");

  const handleAdd = () => {
    if (text.trim() === "") return;
    addTask(text, priority);
    setText("");
    setPriority("low"); // reset dropdown
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAdd();
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Skriv ny oppgave..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="low">Lav</option>
        <option value="medium">Medium</option>
        <option value="high">Høy</option>
      </select>
      <button onClick={handleAdd}>Legg til</button>
    </div>
  );
}

export default AddTodo;
