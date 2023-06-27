import React, { useState } from "react";

export const TaskForm = ({ addTask }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTask(value);

    setValue("");
  };

  return (
    <form className="TaskForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="Task-input"
        value={value}
        placeholder="What is the task for today?"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="Task-btn">
        {" "}
        Add Task{" "}
      </button>
    </form>
  );
};
