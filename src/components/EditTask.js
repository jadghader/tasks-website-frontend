import React, { useState } from "react";
import { updateData } from "../api/put";

export const EditTask = ({ fetchdata, task }) => {
  const [value, setValue] = useState(task.title);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateData({ id: task._id, title: value });
    fetchdata();
    setValue("");
  };

  return (
    <form className="TaskForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="Task-input"
        value={value}
        placeholder="Update task"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="Task-btn">
        {" "}
        Update Task{" "}
      </button>
    </form>
  );
};
