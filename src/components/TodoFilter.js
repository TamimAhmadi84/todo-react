import React from "react";

function TodoFilter({ filter, setFilter }) {
  return (
    <div className="filter-container">
      <button
        className={filter === "all" ? "active" : ""}
        onClick={() => setFilter("all")}
      >
        Alle
      </button>
      <button
        className={filter === "active" ? "active" : ""}
        onClick={() => setFilter("active")}
      >
        Aktive
      </button>
      <button
        className={filter === "done" ? "active" : ""}
        onClick={() => setFilter("done")}
      >
        Ferdige
      </button>
    </div>
  );
}

export default TodoFilter;
